import React, {Component} from 'react'
import axios from 'axios';
import "./Admin.css"
import {Link} from 'react-router-dom'

class AdminDeleteJournal extends Component {
    state = {
        title: "",
        updated: false,
        deleted: "",
        titleError: ""
    }


    handleSubmit = (evt) => {
    evt.preventDefault()
    this.setState({updated: true})
     axios.get("https://toppubs-385ff.firebaseio.com/journals.json")
    .then(response => {
        for (let [key, value] of Object.entries(response.data)) {          
            if(value.title === this.state.title) {
                axios.delete(`https://toppubs-385ff.firebaseio.com/journals/${key}.json`)
                this.setState({deleted: this.state.title, title: ""})
                } else {
                    this.setState({titleError: this.state.title})
                }

            }
        
        }
    ) 
    .catch(error => console.log(error))
    }

    handleChange = (evt) => {
    this.setState({title: evt.target.value})
    }

    handleReset = () => {
        this.setState({updated: false, deleted: "", title: ""})
    }

    render () {
        let deleteMessage = ""
            if (this.state.deleted) {
                const message = 
                <h4 style={{color: "steelblue"}}> Success - {this.state.deleted} deleted.</h4>
                deleteMessage = 
                <div className="errorMessage">
                {message}
                    <form onSubmit={this.handleReset}>
                        <button className="submitButton" type="submit" style={{backgroundColor: "forestgreen"}}>Delete another?</button>
                        <Link to="/admin">
                            <button className="submitButton" type="submit">Admin</button>
                        </Link>
                    </form>
                </div>
            } else if (this.state.titleError) {
                    const errorMessage = <h4 style={{color:"red"}}>Error - {this.state.titleError} is not in the database</h4>
                    deleteMessage = 
                    <div className="errorMessage">
                        {errorMessage}
                        <form onSubmit={this.handleReset}>
                            <button className="submitButton"
                            type="submit" style={{backgroundColor:"forestgreen"}}
                            >Try Again?</button>
                            <Link to="/admin">
                                <button className="submitButton" 
                                type="submit">Admin</button>
                            </Link>
                        </form>
                    </div>
            }
            return (
                <div className = "adminPage">
                    <h1 style={{marginBottom: 0}}>Delete Journals...</h1>
                    <h4 style={{marginTop: "10px"}}>Enter the title of the journal you want to delete:</h4>
                    {this.state.titleError ?
                    deleteMessage
                    :
                    <div className="journalInput">
                        <form className = "journalForm" 
                        onSubmit={this.handleSubmit}>
                            <label for="title">Title</label>
                                <div style={{display:"block"}}>
                            <input type="text" 
                            onChange={this.handleChange}
                            name="title"
                            value={this.state.title}
                            placeholder="Title"
                            id="title"
                            className="inputBox"
                            />
                            </div>
                            {!this.state.updated && 
                            <div>
                                <button className="submitButton" type="submit">Submit</button>
                            </div>
                            }
                        </form>
                        </div>
                    }
                </div>
    
            )
        }
    }
 export default AdminDeleteJournal
