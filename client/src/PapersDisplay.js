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
      <h2>No papers published since {moment(this.props.inputedDate1, "YYYY-MM-DD").format("DD/MM/YYYY")}</h2>
      : 
      <h2 className="noPapers">No papers published between {moment(this.props.inputedDate1, "YYYY-MM-DD").format("DD/MM/YYYY")} - {moment(this.props.inputedDate2, "YYYY-MM-DD").format("DD/MM/YYYY")} </h2>
      }
    </div>
  } else {
  
  if (this.props.inputedDate1) {
      papersToDisplay = this.props.papersListInputedDate
      heading = 
      <div>
      {!this.props.inputedDate2 ? 
          <div className="dateHeading" >
          <h2>Papers published since {moment(this.props.inputedDate1, "YYYY-MM-DD").format("DD/MM/YYYY")} <span className="totalpapers">({this.props.idlistInputedDate.length} in total)</span></h2>
          </div>
          :
          <div className="dateHeading">
          <h2>Papers published between {moment(this.props.inputedDate1, "YYYY-MM-DD").format("DD/MM/YYYY")} - {moment(this.props.inputedDate2, "YYYY-MM-DD").format("DD/MM/YYYY")} <span className="totalpapers">({this.props.idlistInputedDate.length} in total)</span></h2>
          </div>
          }
      </div>
  } else if (this.props.idlistNoJournals.length){
    papersToDisplay = this.props.papersListNoJournals
    heading = 
    <div> 
        <div className="paperDisplay" style={{display:"flex", alignItems: "center"}}>
        <h2>All Aussie papers published in the past week <span className="totalpapers">({this.props.idlistNoJournals.length} in total)</span></h2>
        </div>
    </div>
  } else {
    papersToDisplay = this.props.papersList
    heading = 
    <div className="paperDisplay">        
    { !this.props.idlistNoJournals.length && <h2>Papers published yesterday <span className="totalpapers">({this.props.papersList.length} in total)</span></h2>}
    {!this.props.papersList.length && !this.props.idlistNoJournals.length && 
    <p>There were no Aussie papers published yesterday in the selected journals.</p>
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
            <div className="paperDisplay" style={{display:"flex", alignItems: "center"}}>
            <p>The were no papers published in last 7 days.</p>
        </div>
        </div>
        }

    return (
        <div>
            {heading}
            {listDisplay}
            {weeklyListDisplay && 
            <div>
                <h2 style={{marginLeft: "50px"}}>Papers published in the preceeding 6 days <span className="totalpapers">({this.props.idlistWeek.length} in total)</span></h2>
                {weeklyListDisplay}
            </div>
            } 
        </div>
        )
    }
}

export default PapersDisplay
