import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import PapersDisplay from './PapersDisplay';
import moment from 'moment';
import DateInput from './DateInput'
import JournalList from './JournalsList'
import EmailForm from './EmailForm'
import Admin from './Admin'
import About from './About'
import ApiError from './ApiError'
import AdminAddJournal from './AdminAddJournal'
import AdminUpdateJournal from './AdminUpdateJournal'
import AdminDeleteJournal from './AdminDeleteJournal'
import Spinner from './Spinner'
import WelcomeBanner from './WelcomeBanner'
import SubHeading from './SubHeading'
import Toolbar from "./Toolbar"
import ResetButton from "./ResetButton"
import {Route, Switch} from 'react-router-dom'
// import urlunencoded from './urlunencoded'
import rateLimit from 'axios-rate-limit';
import CovidLink from "./CovidLink"


const http = rateLimit(axios.create(), {
  maxRequests: 1,
  perMilliseconds: 1000
});


class App extends Component {
  state = {
    idlist: [],
    idlistWeek: [],
    idlistNoJournals: [],
    idlistInputedDate: [],
    papersList : [],
    papersListWeek : [],
    papersListInputedDate : [],
    papersListNoJournals: [],
    abstracts : [],
    dateMinus1: moment().subtract("1", "days").format("YYYY/MM/DD"),
    dateMinus2: moment().subtract("2", "days").format("YYYY/MM/DD"),
    dateMinus7: moment().subtract("7", "days").format("YYYY/MM/DD"),
    inputedDate1: "",
    inputedDate2: "",
    loading: false,
    jlist:[],
    jlistTitleIF:[],
    selectedJournals: [],
    newJournals:[],
    splitjlist: [], 
    journals: [],
    apiError: false,
    country: "Australia"
  }

  componentDidMount () {
    this.setState({loading: true})
    let jlist = []
    let jlistTitleIF =[]
    axios.get(process.env.REACT_APP_FIREBASE_API_KEY)
    .then(response => {
        let vals = Object.values(response.data)
        this.setState({journals: vals})
            vals.forEach(jnl => {
              let jnlObj = {}
                jnlObj["title"] = jnl.title
                jnlObj["IF"] = jnl.if
                jlistTitleIF.push(jnlObj)
                jlist.push((`"${jnl.title}"[Journal] OR `))
            })})
    .then (response => this.setState({jlist, jlistTitleIF}, () => this.getIdList ()
    ))       
  }   


  dateInput = (date1, date2) => {
    if (this.state.papersListNoJournals.length) {
       alert('The date input does not work when a journal list is not defined. Click on "Journals" in the toolbar to refine your search or "RESET" to return to the initial view with the curated list.')
    } else {
    const convertedDate1 = moment(date1, "YYYY-MM-DD").format("YYYY/MM/DD")
    let convertedDate2 = ""
    if (date2) {
    convertedDate2 = moment(date2, "YYYY-MM-DD").format("YYYY/MM/DD")
    }
    this.setState({inputedDate1:convertedDate1, inputedDate2:convertedDate2}, () => 
      this.getIdList()
    )
  }
  }

  getIdList = () => {
    let splitjlist = [] 
    let dateParams = ""
    let dateParams2 = ""
    
    if (this.state.jlist.length > 50) {
      const jlistFirst = this.state.jlist.slice(0,Math.floor(this.state.jlist.length/2))
      const jlistLast = this.state.jlist.slice(Math.floor(this.state.jlist.length/2))
      splitjlist = [jlistFirst, jlistLast]
      } else {
      splitjlist.push(this.state.jlist)
    } 
  this.setState({splitjlist, idlist:[], idlistWeek:[], idlistInputedDate:[], papersList:[], papersListWeek:[], loading:true}, () => {
    if (!this.state.inputedDate1) {
        dateParams = `${this.state.dateMinus1}"[Date - Entrez] : "3000"[Date - Entrez])`
        dateParams2 = `${this.state.dateMinus7}"[Date - Entrez] : "${this.state.dateMinus2}"[Date - Entrez])`
    } else if (this.state.inputedDate1 && !this.state.inputedDate2){
        dateParams = `${this.state.inputedDate1}"[Date - Entrez] : "3000"[Date - Entrez])`
    } else if (this.state.inputedDate1 && this.state.inputedDate2) {
        dateParams = `${this.state.inputedDate1}"[Date - Entrez] : "${this.state.inputedDate2}"[Date - Entrez])`
    }
  

    let loop = 0
    this.state.splitjlist.forEach(jlistitem => {
    const jlistString = jlistitem.toString().replace(/,/g,"").slice(0,-4)
    let urlunencoded = `(((${jlistString})) AND ${this.state.country}[Affiliation]) AND ("`
    const urlEncoded = encodeURIComponent(urlunencoded)
    const dateParamsEncoded = encodeURIComponent(dateParams)
    const dateParamsEncoded2 = encodeURIComponent(dateParams2)

    const url =  `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&retmode=json&retmax=10000&term=${urlEncoded}${dateParamsEncoded}&api_key=${process.env.REACT_APP_PUBMED_API_KEY}`
    const url2 =  `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&retmode=json&retmax=10000&term=${urlEncoded}${dateParamsEncoded2}&api_key=${process.env.REACT_APP_PUBMED_API_KEY}`

    if (!this.state.inputedDate1) {
      axios.all([
        http.get(url),
        http.get(url2)
      ])
      .then(axios.spread((responseUrl1, responseUrl2) => {        
        const idlist = this.state.idlist.concat(responseUrl1.data.esearchresult.idlist)
        const idlistWeek = this.state.idlistWeek.concat(responseUrl2.data.esearchresult.idlist)
        this.setState({idlist, idlistWeek})
        loop = loop +1
        splitjlist.length === loop &&
        this.addPapers() }))
        .catch(error => 
            this.setState({apiError: true, loading: false})
        )
        
      } else if (this.state.inputedDate1) {
        axios.get(url)
        .then (response => {
          const idlistInputedDate = this.state.idlistInputedDate.concat(response.data.esearchresult.idlist)
          this.setState({idlistInputedDate})
          loop = loop +1
          splitjlist.length === loop && 
          this.addPapers()
          })
          .catch(error => 
            this.setState({apiError: true, loading: false})
        )
        }
      })
    })
  }


noJournalSearch = () => {
  const urlunencoded = `(${this.state.country}[Affiliation]) AND ("`
  this.setState({loading:true})
  const dateParams = `${this.state.dateMinus7}"[Date - Entrez] : "3000"[Date - Entrez])`
  const urlEncoded = encodeURIComponent(urlunencoded)
  const dateParamsEncoded = encodeURIComponent(dateParams)
  const url =  `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&retmode=json&retmax=10000&term=${urlEncoded}${dateParamsEncoded}&api_key=${process.env.REACT_APP_PUBMED_API_KEY}`
  axios.get(url)
  .then (response => 
    this.setState({idlistNoJournals: response.data.esearchresult.idlist, selectedJournals: [], newJournals: [], inputedDate1: "", inputedDate2:"", loading:true, idlist:[], idlistWeek:[], papersList:[], papersListWeek: []}, () => {
      this.addPapers()
    }))
    .catch(error => 
      this.setState({apiError: true, loading: false})
  )
}


addPapers = () => { 
this.setState({loading: true})

let paperList = []
let paperListWeek = []

let paperListString = []
let idlistToDisplay = ""

if (this.state.idlistNoJournals.length) {
        idlistToDisplay = this.state.idlistNoJournals
    } else if (this.state.idlistInputedDate.length) {
      if (this.state.idlistInputedDate.length > 2000) {
        alert("Your search returned: " + this.state.idlistInputedDate.length + " papers. All papers beyond the 2000th have been removed. If you want to see more papers in that date range, please perform separate searches using closer start and end dates.")
        idlistToDisplay = this.state.idlistInputedDate.splice(2000)  
      } else {
        idlistToDisplay = this.state.idlistInputedDate
      }  
    } else if (this.state.idlist.length){
        idlistToDisplay = this.state.idlist
    }

    if (idlistToDisplay.length < 350){
      paperListString.push([idlistToDisplay.toString()])
    } else {
      for (let i=0; i < idlistToDisplay.length; i+=349) {
        paperListString.push([idlistToDisplay.slice(i,i+349).toString()]);
      }
  }

  let paperListStringWeek = []
  if (this.state.idlistWeek.length < 350 ){
      paperListStringWeek.push([this.state.idlistWeek.toString()])
    } else {
      for (let i=0; i < this.state.idlistWeek.length; i+=349) {
        paperListStringWeek.push([this.state.idlistWeek.slice(i,i+349).toString()]);
      }
  }

  if (idlistToDisplay.length) {
      let loop = 0
     
      paperListString.forEach(listString => {
          axios.get(`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&retmode=json&id=${listString}&api_key=${process.env.REACT_APP_PUBMED_API_KEY}`)
          
          .then(response1 => { 
            let myObj=response1.data.result
            Object.keys(myObj).forEach(key => {
              let paperObj = {}
              if (key !== "uids") {
              let id = myObj[key].uid
              let title = myObj[key].title
              let  journal = myObj[key].fulljournalname
              let  volume = myObj[key].volume
              let  pages = myObj[key].pages
              let  doi = myObj[key].elocationid
              let  authors = myObj[key].authors
              let  pubdate = myObj[key].pubdate.slice(0,4)
                  
              this.state.jlistTitleIF.forEach(jlistItem => {
                if ((jlistItem.title.toLowerCase() === myObj[key].fulljournalname.toLowerCase()) || (jlistItem.title.toLowerCase() === myObj[key].source.toLowerCase())){
                paperObj.JIF = jlistItem.IF
              }})

              let authorList = []
              authors.map((author, idx) =>
              idx > 0
                ? authorList.push(" " + author.name)
                : authorList.push(author.name)
              )

            paperObj.id = id;
            paperObj.title = title;
            paperObj.journal = journal;
            paperObj.volume = volume;
            paperObj.pages = pages;
            paperObj.authors = authorList.toString();
            paperObj.doi = doi;
            paperObj.pubdate = pubdate;
            paperList.push(paperObj)

            }})
          })
          .catch(error => 
            this.setState({apiError: true, loading: false})
          )
          .then(response1 => {
          
          if (loop === paperListString.length) {
            if (this.state.idlistNoJournals.length) {
              paperList.length === idlistToDisplay.length && 
              this.setState({ papersListNoJournals: paperList, loading: false });
            } else if (this.state.idlistInputedDate.length) {
            paperList.length === idlistToDisplay.length && 
            this.setState({ papersListInputedDate: paperList, loading: false });
          } else if (this.state.idlist.length){
            paperList.length === idlistToDisplay.length && 
            this.setState({ papersList: paperList, loading: false })
          }
          }
        })
        loop = loop + 1
      })
    }
  if (this.state.idlistWeek.length) { 
      let loopWeek = 0
      if (!this.state.inputedDate1) {
      paperListStringWeek.forEach(listString => {
          axios.get(`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&retmode=json&id=${listString}&api_key=${process.env.REACT_APP_PUBMED_API_KEY}`)
          .then(response2 => {    
            this.state.idlistWeek.forEach(id => {
                let paperWeekObj = {}
                let title = response2.data.result[id].title
                let  journal = response2.data.result[id].fulljournalname
                let  volume = response2.data.result[id].volume
                let  pages = response2.data.result[id].pages
                let  doi = response2.data.result[id].elocationid
                let  authors = response2.data.result[id].authors
                let  pubdate = response2.data.result[id].pubdate.slice(0,4)
                this.state.jlistTitleIF.forEach(jlistItem => {
                  if ((jlistItem.title.toLowerCase() === response2.data.result[id].fulljournalname.toLowerCase()) || (jlistItem.title.toLowerCase() === response2.data.result[id].source.toLowerCase())){
                    paperWeekObj.JIF = jlistItem.IF
                }})
                
                let authorList = []
                
                authors.map((author, idx) =>
                idx > 0
                  ? authorList.push(" " + author.name)
                  : authorList.push(author.name)
                )
              paperWeekObj.id = id;
              paperWeekObj.title = title;
              paperWeekObj.journal = journal;
              paperWeekObj.volume = volume;
              paperWeekObj.pages = pages;
              paperWeekObj.authors = authorList.toString();
              paperWeekObj.doi = doi;
              paperWeekObj.pubdate = pubdate;
              paperListWeek.push(paperWeekObj);
                  })
              })
              .then(response2 => {
                if (loopWeek === paperListStringWeek.length) { 
                paperListWeek.length === this.state.idlistWeek.length &&
                this.setState({ papersListWeek: paperListWeek, loading: false })
                }
              }) 
              loopWeek = loopWeek + 1 
          })
      } 
    } else {
      this.setState({ papersListWeek: [], loading: false })
    }  
};

resetDates = () => {
  this.setState({inputedDate1: "", inputedDate2: "",  idlistInputedDate: [], papersListInputedDate: [], papersListNoJournals: [], idlistNoJournals:[]}, () => this.getIdList() ) 
}

apiReset = () => {
  this.setState({apiError:false}, () => this.getIdList() ) 
}


filterJournals = (selectedJournals, newJournals) => {
  let jlist= []
  let filteredJournalList = this.state.journals.filter(journal =>  !selectedJournals.includes(journal.title))
  let filteredJournalListTitles = filteredJournalList.map(journal => journal.title)
  let filteredPlusAddedList = filteredJournalListTitles.concat(newJournals)
  filteredPlusAddedList.forEach(jnl => {
  jlist.push((`"${jnl}"[Journal] OR `))
  })
  this.setState({idlistNoJournals:[], papersListNoJournals:[], jlist, selectedJournals, newJournals}, () => {
  this.getIdList()}) 
}

countrySelect = (country) => {
    this.setState({country}, () => {
      this.getIdList()}
  )}

  render() {
    let papersDisplay = ""
   
      papersDisplay =  <PapersDisplay 
      papersList = {this.state.papersList}
      papersListWeek = {this.state.papersListWeek}
      papersListInputedDate = {this.state.papersListInputedDate}
      papersListNoJournals = {this.state.papersListNoJournals}
      inputedDate1 = {this.state.inputedDate1}
      inputedDate2 = {this.state.inputedDate2}
      idlistNoJournals = {this.state.idlistNoJournals}
      idlistWeek = {this.state.idlistWeek}
      idlistInputedDate = {this.state.idlistInputedDate}
      country = {this.state.country}
      /> 
      if(this.state.loading) {
        papersDisplay = <Spinner />
      } else if (this.state.apiError) {
        papersDisplay = <ApiError 
        apiReset={this.apiReset}
        />
      }
   
    return ( 
      <div className="App">
        <Toolbar />
        <Switch>
          <Route exact path="/" render= {() => 
            <>
            <WelcomeBanner 
            country = {this.state.country} 
            />
            <DateInput
              dateInput = {this.dateInput}
              countrySelect = {this.countrySelect}
            /> 
            <SubHeading />  
            {(this.state.inputedDate1 || this.state.papersListNoJournals.length > 0) &&
            <ResetButton 
              resetDates = {this.resetDates}
            />
          }
          <div className="covidlink">
            <CovidLink 
              />
          </div>
            {(!this.state.apiError && !this.state.papersListNoJournals.length) ?
            <p className="ifColorList">Impact Factors: <span style={{color:"red",fontSize:"1.5rem"}}>•</span> >30 | <span style={{color:"orange",fontSize:"1.5rem"}}>•</span> 20-30 | <span style={{color:"green",fontSize:"1.5rem"}}>•</span> 10-20 | <span style={{color:"blue",fontSize:"1.5rem"}}>•</span> &lt;10</p>
            :
            null
          }
              {papersDisplay}
              </>
              } 
            />
            <Route exact path="/journals" render= {() => 
              <JournalList 
              filterJournals={this.filterJournals}
              selectedJournals={this.state.selectedJournals}
              newJournals ={this.state.newJournals}
              papersListNoJournals = {this.state.papersListNoJournals.length}
              noJournalSearch = {this.noJournalSearch}
              />
            }
            />
            <Route exact path="/admin" render= {() => 
              <Admin />
            }
            />
            <Route exact path="/about" render= {() => 
              <About />
            }
            />
            <Route exact path="/contact" render= {() => 
              <EmailForm />
            }
            />
            <Route exact path="/admin/add" render= {() => 
              <AdminAddJournal />
            }
            />
            <Route exact path="/admin/update" render= {() => 
              <AdminUpdateJournal />
            }
            />
            <Route exact path="/admin/delete" render= {() => 
              <AdminDeleteJournal />
            }
            />
        </Switch>
      </div>
    );

}
}
export default App;
