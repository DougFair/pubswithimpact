import React, {Component} from 'react'
import axios from 'axios';
import LinkButton from './LinkButton'
import AddJournalForm from './AddJournalForm'
import "./JournalsList.css"
import "./LinkButton.css"

class JournalList extends Component {
    state = {
        journals: [],
        selectedJournals: [],
        newJournals: [],
        selectAll: false,
        noJournalError: false
    }

componentDidMount () {
    if (this.props.selectedJournals)this.setState({selectedJournals: this.props.selectedJournals})
    if (this.props.newJournals)this.setState({newJournals: this.props.newJournals})
   
    axios.get("https://toppubs-385ff.firebaseio.com/journals.json")
    .then(response => {
        let vals = Object.values(response.data)
        let sortedList = 
        vals.sort((a,b) => (a.title.toUpperCase() > b.title.toUpperCase()) ? 1 : ((b.title.toUpperCase() > a.title.toUpperCase()) ? -1 : 0))
        this.setState({journals: sortedList}, () => {
        if (this.props.papersListNoJournals > 0) {
        this.handleSelectAll()}
        })
    })    
}


handleNoJournalSubmit= (evt) => {
        evt.preventDefault ()
        this.props.noJournalSearch("none")
} 
    

handleSubmit = (evt) => {
    evt.preventDefault ()
    this.props.filterJournals(this.state.selectedJournals, this.state.newJournals)
} 

handleFilter = (evt) =>{
    let selection = evt.target.name
        if (this.state.selectAll)(this.setState({selectAll: false, papersListNoJournals: []}))
        
        if (this.state.selectedJournals.length){
        if(this.state.selectedJournals.includes(evt.target.name)){
        this.setState(st => ({papersListNoJournals: [], selectedJournals: st.selectedJournals.filter(journal => journal !== selection)}), () => {
        this.noJournalCheck()} )
        } else {
        this.setState({papersListNoJournals: [], selectedJournals: [...this.state.selectedJournals, evt.target.name]}, () => this.noJournalCheck())
        } } else {
        this.setState({papersListNoJournals: [], selectedJournals: [...this.state.selectedJournals, evt.target.name]},() => {
            this.noJournalCheck()})
        
        }
}

noJournalCheck = () => {
    if((this.state.selectedJournals.length === this.state.journals.length) && !this.state.newJournals.length){
        this.setState({noJournalError: true, papersListNoJournals: []})
    } else {
        this.setState({noJournalError: false, papersListNoJournals: []})
    }
}

addNewJournal = (newJournal) => {
    if(this.state.journals.filter(jnl => jnl.title === newJournal).length){
    alert("That journal is already in the curated list. If it is deselected, then re-select it if you want it in your search list")
    } else if (this.state.newJournals.includes(newJournal)){
        alert("You have already added that journal!")
    } else {
    this.setState({newJournals: [...this.state.newJournals,newJournal], noJournalError:false
    })}
}

handleNewJournalFilter = (evt) =>{
    let selection = evt.target.name
    if(this.state.newJournals.includes(evt.target.name)){
    this.setState(st => ({newJournals: st.newJournals.filter(journal => journal !== selection)}), ()=> this.noJournalCheck())
    } else {
    this.setState({newJournals: [...this.state.newJournals, evt.target.name]})
    } 
} 

handleSelectAll = (evt) =>{
    let allJournals = ""
    if(!this.state.selectAll){
        allJournals = this.state.journals.map(jnl => {
         return(jnl.title)})
        this.setState({papersListNoJournals: [], selectedJournals: allJournals, selectAll: true}, () => this.noJournalCheck())
    } else {
        this.setState({papersListNoJournals: [], selectedJournals: [], selectAll: false}, () => this.noJournalCheck())
    }
} 

    render () {
        let list = ""
        let ifColor= ""
        if (this.state.journals) {
            list = this.state.journals.map(item => {
                if (item.if >=30) {
                    ifColor="red"
                } else if (item.if >=20 && item.if< 30){
                    ifColor="orange"
                } else if (item.if >=10 && item.if< 20) {
                    ifColor="green"
                } else if (item.if  < 10) {
                    ifColor="blue"
                }
                
                return (
                <div  className="journalListRow" key={item.title}>
                    <p className="ifIndicator" style={{color:ifColor, fontSize: "1.5rem", paddingBottom: "0.25rem"}}>•</p>
                    <input type="checkbox"
                    name={item.title} 
                    onChange={this.handleFilter}
                    checked={!this.state.selectedJournals.includes(item.title)}
                    className="checkbox"
                    />
                    <p id="checkPara" className={this.state.selectedJournals.includes(item.title) ? "selectedJournal" : undefined}>{item.title}</p>
                </div>
            )
        })
    }
    
    let newJournalList = ""
        if (this.state.newJournals) {
        newJournalList = this.state.newJournals.map(item => {
            return (
            <div  className="filterForm" key={item} >
            <input type="checkbox"
            name={item} 
            onChange={this.handleNewJournalFilter}
            checked={this.state.newJournals.includes(item)}
            className="checkbox"
            />
            <p id="checkPara" className={!this.state.newJournals.includes(item) ? "selectedJournal" : undefined}>{item}</p>
            </div>
        )
    })
}

        return (
            <div className="displayContainer">
                    <div className="journalListHeading">
                        <h1>Journal List Customisation</h1>
                        <h2 className="journalListSubHeading">You have several options for customising your search</h2>
                        <h2 className="subheading">Search without filtering journals</h2>
                        <div>
                        
                            <h3 className="manualJournalListSubheading1">Returns all Aussie papers in last week.</h3>
                            <form onClick={this.handleNoJournalSubmit} style={{display:"flex", justifyContent:"center"}}>
                                <LinkButton className="linkButtonNoJournalList" to='/'>ALL JOURNALS</LinkButton>
                            </form>
                            <h3 className="manualJournalListSubheading2">NOTE: Search dates cannot be customised - you will only get pubs from the last week.</h3>
                        </div>

                    <hr/>

                        <h2 className="subheading" >Manually add journals and/or edit our curated list</h2>
                            
                            <h4 className="introText">After adding and/or removing journals, click  "SEARCH"...</h4>
                            
                            {this.state.noJournalError ? 
                            <div className="noJournalError">
                            <div className="noJournalError">You have now removed all journals. To proceed with this search click "ALL JOURNALS" above.
                            </div>
                            <div className="noJournalError">Otherwise, select one or more journals from the curated list or a add a new title.</div>       
                            </div> 
                            : 
                            <form onClick={this.handleSubmit}>  
                            <LinkButton className="linkButtonJournalList" to='/'>SEARCH</LinkButton>
                            </form>
                            }     
                </div>
           

            <div className="journalList">
                    <div className="addJournalSection">
                        <div>
                            <h2 className="subheading">Add new journals</h2>
                            <AddJournalForm 
                                addNewJournal={this.addNewJournal}
                                newJournals={this.state.newJournals}
                            />

                            {this.state.newJournals.length >0 && 
                        <div>
                                <h3 className="manualJournalListHead">Journals added manually:</h3>
                                <h3 className="manualJournalListSubheading">Uncheck to remove from your search.</h3>
                                {newJournalList}
                        </div>
                            }
                        </div>
                    </div>

                    <div className="removeJournalSection">
                        <div className="removeJournalHeadings">
                            <h2 className="subheading">Edit the curated journal list</h2>
                            <h3 className="manualJournalListSubheading">Uncheck those you do not want to include in your search.</h3>
                            <p className="ifColorList">Impact Factors: <span style={{color:"red",fontSize:"1.5rem"}}>•</span> >30 | <span style={{color:"orange",fontSize:"1.5rem"}}>•</span> 20-30 | <span style={{color:"green",fontSize:"1.5rem"}}>•</span> 10-20 | <span style={{color:"blue",fontSize:"1.5rem"}}>•</span> &lt;10</p>
                        </div>
                        <div className="journalSelectSection">
                            <div className="filterForm">
                                <input type="checkbox"
                                    id="all"
                                    name="all" 
                                    onChange={this.handleSelectAll}
                                    checked={this.state.selectAll ||(this.state.selectedJournals.length === this.state.journals.length)}
                                    className="checkbox"
                                />
                                <p style={{fontWeight:600}}>Uncheck/Check All Journals</p>
                            </div>
                            <div className="journalListColumn">
                                {list}
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        )
    }
}

 export default JournalList
