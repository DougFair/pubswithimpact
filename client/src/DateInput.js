import React, {Component} from 'react'
import './DateInput.css'


class DateInput extends Component {
    state = {
        newStartDate: "",
        newEndDate: "",
}



    handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.dateInput(this.state.newStartDate, this.state.newEndDate)
        this.setState({newStartDate: "", newEndDate: ""})
       
    }
    
    handleChange = (evt) => (
        this.setState({[evt.target.name]: evt.target.value})
        )



    render() {
     
    return (
            <div>
                <div className="dateInput">
                <div>
                    <p className="customiseMessage">Click "Journals" in toolbar to customise your search further...</p>
                </div>
                <div className="dateModule">
                <form  className="dateInputForm" onSubmit={this.handleSubmit}>
                
                <div style={{display:"flex", alignItems:"center"}}>
                        <div className="column"><p className="inputLabel">Start</p></div>  
                        <div className="column">
                            <input className="dateForm" type="date" name="newStartDate" value={this.state.newStartDate} placeholder="DD/MM/YYYY" onChange={this.handleChange}/>   
                        </div>
                    </div>
                    
                    <div style={{display:"flex", alignItems:"center"}}> 
                        <div className="column" ><p className="inputLabel">End</p></div>
                        <div className="column">
                            <input className="dateForm" type="date" name="newEndDate" value={this.state.newEndDate} placeholder="Present or enter DD/MM/YYYY" onChange={this.handleChange}/>
                        </div>
                    </div>
                    
                    <div className="column" style={{display: "flex", alignItems: "center"}}>
                        <button className="dateInputButton" type="submit" >Submit</button>
                    </div>   
                </form>
                <div className="titleInstruct" >
                    <p>You must enter a Start Date. End Date defaults to today.</p>
                </div>
                </div>
                </div>

            </div>

                
                
       
              
        )
    }
}

export default DateInput