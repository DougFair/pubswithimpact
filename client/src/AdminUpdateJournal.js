import React, {Component} from 'react'
import axios from 'axios';
import "./Admin.css"
import {Link} from 'react-router-dom'

class AdminUpdateJournal extends Component {
    state = {
        title: "",
        category: "",
        if: "",
        submitted: false,
        id: "",
        matched: false,
        updated: false
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        this.setState({submitted: true})
         axios.get("https://toppubs-385ff.firebaseio.com/journals.json")
        .then(response => {
            for (let [key, value] of Object.entries(response.data)) {          
                if(value.title === this.state.title) {
                   
                    this.setState({title: value.title, category: value.category, if: value.if, matched: true, id: key})
                    } 
                }
            }
        )
        .catch(error => console.log(error))
        }
    
        handleChange = (evt) => (
        this.setState({[evt.target.name]: evt.target.value})
        )


        handleUpdate = (evt) => {
        evt.preventDefault()
        const journal = {title: this.state.title, category: this.state.category, if: this.state.if} 
        axios.put(`https://toppubs-385ff.firebaseio.com/journals/${this.state.id}.json`, journal)
        .then(this.setState({submitted: false, title: "", updated: true, category: "", if: "", id:""})) 
        .catch(error => console.log(error))
        }
    
        handleReset = (evt) => {
        evt.preventDefault()
        this.setState({ updated: false, matched: false, submitted: false, title: "" })
        }
  
    
        render () {
            let updateForm = "";
            let error = "";
            let journalForm = "";
            let updateAnother=""

            const adminButton =                                 
            <Link to="/admin">
                <button className="submitButton" type="submit">
                Admin
                </button>
            </Link>


            if (this.state.submitted && this.state.matched) {
               updateForm = 
                <div>
                    <h4>Update any of the details:</h4>
                    <form onSubmit={this.handleUpdate}>
                    <label htmlFor="title">Title</label>
                    <input type="text" 
                    onChange={this.handleChange}
                    name="title"
                    value={this.state.title}
                    placeholder="Title"
                    id="title"
                    className="inputBox"
                    />
                    <label htmlFor="title">Category</label>
                    <input type="text" 
                    onChange={this.handleChange}
                    name="category"
                    value={this.state.category}
                    placeholder="Category"
                    id="category"
                    className="inputBox"
                    />
                    <label htmlFor="Impact Factor">Impact Factor</label>
                    <input type="text" 
                    onChange={this.handleChange}
                    name="if"
                    value={this.state.if}
                    placeholder="Impact Factor"
                    id="if"
                    className="inputBox"
                    />
                    <button className="submitButton" 
                    type="submit"
                    >Update</button>
                    </form>    

            </div>
            } else if (this.state.submitted && !this.state.matched && !this.state.updated) {
                const message = <h4 style={{color:"red"}}>Error - {this.state.title} is not in the database</h4>         
                error = 
                    <div className="errorMessage">
                    {message}
                        <form onSubmit={this.handleReset}>
                            <button className="submitButton"
                            style={{backgroundColor:"forestgreen"}}
                            type="submit"
                            onClick={this.handleReset}
                            >Try Again?</button>
                            
                            <Link to="/admin">
                                <button className="submitButton" 
                                type="submit">Admin</button>
                            </Link>
                        </form>
                    </div>
            } else if (!this.state.submitted && !this.state.updated) {
                journalForm = 
                <div className="errorMessage">
                        <h4 style={{marginTop: "10px"}}>Enter the title of the journal you want to update:</h4>
                        <form className = "journalForm" 
                        onSubmit={this.handleSubmit}>
                            
                            <label htmlFor="title">Title</label>
                            <input type="text"   
                            onChange={this.handleChange}
                            name="title"
                            value={this.state.title}
                            placeholder="Title"
                            id="title"
                            className="inputBox"
                            />
                      
                            <div>
                                <button className="submitButton" type="submit">Submit</button>
                            </div>
                            </form>
                </div>
            } else if (this.state.updated && this.state.matched) {
                console.log("updated")
                const resetMessage =
                <h4 style={{color: "steelblue"}}>Success! - {this.state.title} has been updated.</h4>
                updateAnother =
                <div className="journalError">
                    {resetMessage}
                    <h3>Add another or return to Admin...</h3>
                    <form onSubmit={this.handleReset}>
                        <button className="submitButton" type="submit" style={{backgroundColor:"forestgreen"}}>
                        Update Another
                        </button>
                        {adminButton}
                    </form>
                </div>
            }
            return (
                <div className = "adminPage">
                    <h1 style={{marginBottom: 0}}>Update Journals...</h1>
                    {journalForm}
                    {updateForm}
                    {error}
                    {updateAnother}
                </div>
            )

    }
  }  
 export default AdminUpdateJournal
