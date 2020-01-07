import React, {Component} from 'react'
import "./AddJournalForm.css"


class AddJournalForm extends Component {
    state = {
        newJournal: ""
    }

    submitJournal = (evt) => {
        console.log("submit")
        evt.preventDefault()
        this.props.addNewJournal(this.state.newJournal)
        this.setState({newJournal:""})
    }
    
    handleAddJournalInput = (evt) => {
        this.setState({newJournal: evt.target.value})
    } 

    render () {
        let journalAddForm = 
        <div className="addJournalContainer">
            <form onSubmit={this.submitJournal} className="addJournalForm">
 
                <div>
                    <input 
                    className="journalInput"
                    type="text"
                    placeholder="Journal Title"
                    name="journalTitle"
                    value={this.state.newJournal} 
                    onChange={this.handleAddJournalInput}
                    />
                </div>
                <h4 className="formSubHeading">Enter the title exactly as for a PubMed search</h4>
                {this.props.newJournalError && <div className="journalListAddError">Error: that journal is either in our curated list or you have already added it.</div>}
                <div>
                    <button type="submit" className="addButton">ADD</button>
                </div>
            </form>
        </div>
    return(
        journalAddForm
        )     
    }    
}

export default AddJournalForm