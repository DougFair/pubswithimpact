import React, {Component} from 'react'        

           
class JournalForm extends Component {

state = {
    title: "",
    category: "",
    if: "",
}

    handleSubmit = (evt) => {
        evt.preventDefault()
        const journal = {title: this.state.title, category: this.state.category, if: this.state.if} 
            this.props.handleSubmit(journal)
    }
    
    handleChange = (evt) => {
        this.setState({[evt.target.name]: evt.target.value})
        }
    



        render (){

           return(
           <div>
                <form className = "journalForm" 
                onSubmit={this.handleSubmit}>
                    <div >
                        <label htmlFor="title">Title</label>
                        <input 
                        className="inputBox"
                        type="text" 
                        onChange={this.handleChange}
                        name="title"
                        value={this.state.title}
                        placeholder="Title"
                        id="title"
                        />
                    </div>
                    <div>
                        <label htmlFor="category">Category</label>
                        <input 
                        className="inputBox"
                        type="text" 
                        onChange={this.handleChange}
                        name="category"
                        value={this.state.category}
                        placeholder="Category"
                        />
                    </div>
                    <div>
                        <label htmlFor="Impact Factor">Impact Factor</label>
                        <input 
                        className="inputBox"
                        type="text" 
                        onChange={this.handleChange}
                        name="if"
                        value={this.state.if}
                        placeholder="Impact Factor"
                        />
                    </div>
                    <div>
                        <button className="submitButton" type="submit">
                        Submit
                        </button>
                    </div>
                </form>
            </div>
           )
    }

}
export default JournalForm           