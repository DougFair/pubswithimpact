import React from 'react'
import {Link} from 'react-router-dom'
import './Toolbar.css'

const Toolbar = () => {
    
    return (
        <nav className="nav">
            <div>
                <Link to="/" className="link">APWI</Link>
                <Link to="/journals" className="link">Journals</Link>
            </div>
            <div>
                <Link to="/about" className="link">About</Link>
                <Link to="/contact" className="link">Contact</Link>
                <Link to="/admin" className="link">Admin</Link>
            </div>
        </nav>
      );
}
 
export default Toolbar;