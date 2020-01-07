import React, {Component} from 'react'
import axios from 'axios';
import './EmailForm.css'

class EmailForm extends Component {
    state = {
        from: "",
        to: "contact@pubswithimpact.com",
        text: "",
        subject: "",
    }

handleSubmit = (e) => {
    e.preventDefault()
    
    const { from, to, text, subject } = this.state;

    const message = {
      to,
      from,
      subject,
      text
    }

    axios
    .post('http://pubswithimpact.herokuapp.com/sendEmail', message)
    .then(this.setState({name:"", from:"",subject:"", text:""}))
    .catch(err => {
      console.error(err);
    })
    alert("Message Sent!")
}  


    handleChange = (evt) => {
    this.setState({[evt.target.name]:evt.target.value})
}


render () {  
    return(
            <div className="contactContainer">
                <div className="contactHeader">
                    <h1>Contact Us!</h1>
                    <p>Please feel free to contact us about any aspect of this website - we are very open to suggestions on how you think we can improve things! Suggestions for any other features you would like to see added, or specific journal titles you would like included in our standard curated list, are also most welcome - all ideas will be considered. Thank You!</p>
                </div>

                <div className="emailForm">
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label  htmlFor="name">Your Name</label>
                            <input type="text" 
                            name="name"
                            value={this.state.name}
                            placeholder="You Name"
                            onChange = {this.handleChange}
                            className="contactInput"
                            />
                        </div>
                        <div>
                            <label  htmlFor="from">Your Email Address</label>
                            <input type="email" 
                            name="from"
                            placeholder="e.g. joe.bloggs@email.com"
                            value={this.state.from}
                            onChange = {this.handleChange}
                            className="contactInput"
                            />
                        </div>
                        <div>
                            <label  htmlFor="subject">Subject</label>
                            <input type="text"
                            name="subject"
                            placeholder="Message subject"
                            value={this.state.subject}
                            onChange = {this.handleChange}
                            className="contactInput"
                            />
                        </div>
                        <div>
                            <label  htmlFor="text">Message</label>
                            <textarea type="text"
                            name="text"
                            placeholder="Type message here..."
                            value={this.state.text}
                            onChange = {this.handleChange}
                            className="contactInputTextArea"
                            rows="10"
                            />
                        </div>
                        <button className="contactInputButton">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default EmailForm