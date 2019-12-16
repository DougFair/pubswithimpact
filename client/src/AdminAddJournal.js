import React, {Component} from 'react'
import axios from 'axios';
import "./Admin.css"
import {Link} from 'react-router-dom'
import JournalForm from './AdminJournalForm'

class AdminAddJournal extends Component {
    state = {
        title: "",
        category: "",
        if: "",
        submitted: false,
        journalError: "",
        added: ""
    }


    handleSubmit = (journal) => {
    // evt.preventDefault()
 
    // const journal = {title: this.state.title, category: this.state.category, if: this.state.if} 
    this.setState({submitted: true, title: journal.title, category: journal.category, if: journal.if})
    axios.get("https://toppubs-385ff.firebaseio.com/journals.json")
    .then(response => {
        if (response.data) {
        for (let [key, value] of Object.entries(response.data)) {   
            if(value.title === this.state.title) {
                this.setState({journalError: this.state.title})
            }
        }}}
    )
    .then(response => {
        if (!this.state.journalError) {       
        axios.post("https://toppubs-385ff.firebaseio.com/journals.json", journal)
        // .then(this.setState({added: this.state.title)) 
        } else {
        this.setState({title: "", category: "", if: "", submitted: false})  
        }
        })
    .catch(error => console.log(error))
    }
    

    handleChange = (evt) => {
    this.setState({[evt.target.name]: evt.target.value})
    }


    handleReset = () => {
        this.setState({journalError: "", submitted: false, title: "", if: "", category: ""})
    }


    render () {
        let form =""
        if (!this.state.submitted && !this.state.journalError){
            form = 
            <div className="journalInput">
                <JournalForm 
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                />
            </div>
        }
        
        const adminButton =                                 
        <Link to="/admin">
            <button className="submitButton" type="submit">
            Admin
            </button>
        </Link>
        
        let journalError = ""
        const errorMessage = 
        <h4 style={{color: "red"}}>Error - {this.state.journalError} is already in the database.</h4>

        if(this.state.journalError) {
            journalError = 
            <div className="journalError">
                {errorMessage}
                <h4>Try again, or return to Admin.</h4>
                <form onSubmit={this.handleReset}>
                    <button className="submitButton" type="submit" style={{backgroundColor:"forestgreen"}}>
                    Try Again
                    </button>
                    {adminButton}
                </form>
                
            </div>
        }

        let addAnother = ""
        const resetMessage =
        <h4 style={{color: "steelblue"}}>Success! - {this.state.title} has been added to the database.</h4>
        
        if(this.state.submitted && !this.state.journalError) {
        addAnother =
        <div className="journalError">
            {resetMessage}
            <h3>Add another or return to Admin...</h3>
            <form onSubmit={this.handleReset}>
                <button className="submitButton" type="submit" style={{backgroundColor:"forestgreen"}}>
                Add Another
                </button>
                {adminButton}
            </form>
        </div>
 
        }

        return (
            <div className = "adminPage">
                <h1>Add Journals...</h1>
                {form}
                {journalError}
                {addAnother}        
            </div>
        )
    }
}
 export default AdminAddJournal
