import React, {Component} from 'react'
import "./Admin.css"
import {Link} from 'react-router-dom'

class Admin extends Component {
    state = {
        title: "",
        category: "",
        if: ""
    }



 

    render () {
        return (
            <div className = "adminPage">
                <h1>Administrator Home Page</h1>
                    <div className="adminSelector">
                    
                        <div>
                            <Link to="/admin/add">
                                <button type="submit"
                                style={{backgroundColor: "red"}}
                                className="adminButton">Add Journal</button>
                            </Link>
                        </div>

                        <div>
                            <Link to="/admin/update">
                                <button type="submit"
                                style={{backgroundColor: "orange"}}
                                className="adminButton">Update Journal</button>
                            </Link>
                        </div>

                        <div>
                            <Link to="/admin/delete">
                                <button type="submit"
                                style={{backgroundColor: "green"}}
                                className="adminButton">Delete Journal</button>
                            </Link>

                            <div>
                            <Link to="/">
                                <button type="submit"
                                style={{backgroundColor: "black"}}
                                className="adminButton">Home</button>
                            </Link>
                        </div>
                        </div>
                    </div>
            </div>

        )
    }
}
 export default Admin
