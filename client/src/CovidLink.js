import React from 'react'
import "./CovidLink.css"

const CovidLink = () => {
    return (
        <div className="covidContainer">
        <h3 className="covidPara">NEW: Keep up with the latest COVID-19 papers at: {"\u00A0"}</h3>
        <h3 className="covidPara"><a href="https://covid19pubs.herokuapp.com/" target="_blank" rel="noopener noreferrer">covid19pubs.herokuapp.com</a></h3>
        </div>
    )
}

export default CovidLink