import React, {Component} from 'react'
import './PaperDisplay.css'
import moment from 'moment';

class PapersDisplay extends Component {

    state = {
        loading:false,
    }

render (){
    let heading = ""
    let papersToDisplay = []
    
    if((this.props.inputedDate1 || this.props.inputedDate2) && !this.props.idlistInputedDate.length) {
    heading =
      <div className="noPapers">
      {!this.props.inputedDate2 ? 
      <h2>No papers by authors from {this.props.country} published since {moment(this.props.inputedDate1, "YYYY-MM-DD").format("DD/MM/YYYY")}</h2>
      : 
      <h2 className="noPapers">No papers published by authors from {this.props.country} between {moment(this.props.inputedDate1, "YYYY-MM-DD").format("DD/MM/YYYY")} - {moment(this.props.inputedDate2, "YYYY-MM-DD").format("DD/MM/YYYY")} </h2>
      }
    </div>
  } else {
  
  if (this.props.inputedDate1) {
      papersToDisplay = this.props.papersListInputedDate
      heading = 
      <div>
      {!this.props.inputedDate2 ? 
          <div>
            <h2 className="dateHeading">Papers published by authors from {this.props.country} since {moment(this.props.inputedDate1, "YYYY-MM-DD").format("DD/MM/YYYY")}</h2>
            <h2 className="totalpapers">({this.props.idlistInputedDate.length} in total)</h2>
          </div>
          :
          <div>
            <h2 className="dateHeading">Papers published by authors from {this.props.country} between {moment(this.props.inputedDate1, "YYYY-MM-DD").format("DD/MM/YYYY")} - {moment(this.props.inputedDate2, "YYYY-MM-DD").format("DD/MM/YYYY")}</h2>
            <h2 className="totalpapers">({this.props.idlistInputedDate.length} in total)</h2>
          </div>
          }
      </div>
  } else if (this.props.idlistNoJournals.length){
    papersToDisplay = this.props.papersListNoJournals
    heading = 
    <div> 
        <div >
            <h2 className="dateHeading">All papers published by authors from {this.props.country} in the past week</h2>
            <h2 className="totalpapers">({this.props.idlistNoJournals.length} in total)</h2>
        </div>
    </div>
  } else {
    papersToDisplay = this.props.papersList
    heading = 
    <div className="paperDisplay">
    <p className="customDateMessage" style={{textAlign: "center"}}>You can customise the dates or country of your search in the toolbar above or the journals in the top menubar</p>        
    { !this.props.idlistNoJournals.length && 
    <div>
        <h2 className="dateHeading">Papers published yesterday by authors from {this.props.country}</h2>
        <h2 className="totalpapers">({this.props.papersList.length} in total)</h2>
    </div>
    }
    {!this.props.papersList.length && !this.props.idlistNoJournals.length && 
    <p className="noPapers">There were no papers published by authors from {this.props.country} yesterday in the selected journal(s).</p>
    }
    </div>
  }
}

let listDisplay = ""
if (papersToDisplay.length) {
 listDisplay = papersToDisplay.map(data => {
    let volume = ""
    if (data.volume === "") {
      volume = " volume/pages not yet available"
    } else {
    volume = `${data.volume}: `
    }

  let ifColor= ""
    if (data.JIF >=30) {
      ifColor="red"
  } else if (data.JIF >=20 && data.JIF< 30){
      ifColor="orange"
  } else if (data.JIF >=10 && data.JIF< 20) {
      ifColor="green"
  } else if (data.JIF  < 10) {
      ifColor="blue"
  }
 
    return (   
    <div className="paperlistContainer"
    key={data.id}>
    <span>
    {!this.props.papersListNoJournals.length &&   
    <span className="if" style={{color:ifColor, fontSize: "1.5rem", paddingBottom: "0.25rem"}}>• </span>
    }
    <span className="title">{`${data.title} `}</span>
    <span className="authors">{`${data.authors}, `}</span>
    <span className="year">{`(${data.pubdate}), `}</span>
    <span className="journal">{`${data.journal},  `}</span>
    <span className="volume">{`${volume} `}</span>
    <span className="pages">{`${data.pages},  `}</span>
    <span className="doi">{`${data.doi}, `}</span>
    <span className="pmid">PMID: <a href={`https://www.ncbi.nlm.nih.gov/pubmed/${data.id}`} target="_blank" rel="noopener noreferrer">{data.id}.</a></span>
    </span>
    </div>
    )
})
}

let weeklyListDisplay = ""
if (this.props.inputedDate1 || this.props.idlistNoJournals.length){
    weeklyListDisplay = null  
    
    } else if (this.props.idlistWeek.length) {
    weeklyListDisplay = this.props.papersListWeek.map(data => {
        let volume = ""
        if (data.volume === "") {
        volume = " volume/pages not yet available"
        } else {
        volume = `${data.volume}: `
        }

    let ifColor= ""
        if (data.JIF >=30) {
        ifColor="red"
    } else if (data.JIF >=20 && data.JIF< 30){
        ifColor="orange"
    } else if (data.JIF >=10 && data.JIF< 20) {
        ifColor="green"
    } else if (data.JIF  < 10) {
        ifColor="blue"
    }

        return (

        <div className="paperlistContainer"
        key={data.id}>

        <span>
        <span className="if" style={{color:ifColor, fontSize: "1.5rem", paddingBottom: "0.25rem"}}>• </span>
        <span className="title">{`${data.title} `}</span>
        <span className="authors">{`${data.authors}, `}</span>
        <span className="year">{`(${data.pubdate}), `}</span>
        <span className="journal">{`${data.journal},  `}</span>
        <span className="volume">{`${volume} `}</span>
        <span className="pages">{`${data.pages},  `}</span>
        <span className="doi">{`${data.doi}, `}</span>
        <span className="pmid">PMID: <a href={`https://www.ncbi.nlm.nih.gov/pubmed/${data.id}`} target="_blank" rel="noopener noreferrer">{data.id}.</a></span>
        </span>
        </div>
        )
    })

    } else {
        weeklyListDisplay = 
        <div> 
            <div className="paperDisplay" style={{display:"flex", alignItems: "center", justifyContent: "center"}}>
            <p className="noPapers">The were no papers published by authors from {this.props.country} in the preceeding 6 days.</p>
        </div>
        </div>
        }

    return (
        <div>
            {heading}
            {listDisplay}
            {weeklyListDisplay && 
            <div>
                <h2 className="dateHeading">Papers published in the preceeding 6 days by authors from {this.props.country} </h2>
                <h2 className="totalpapers">({this.props.idlistWeek.length} in total)</h2>
                {weeklyListDisplay}
            </div>
            } 
        </div>
        )
    }
}

export default PapersDisplay
