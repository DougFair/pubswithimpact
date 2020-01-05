import React from 'react'
import './WelcomeBanner.css'
import './DateInput.css'
const WelcomeBanner = () => {
    return(
        <div>
            <div className="container">
                <div className="bannerText">
                    <p className="bannerTitle">AUSSIE PUBS WITH <span style={{color: "red", fontStyle: "italic"}}>IMPACT!</span></p>
                    <p className="bannerSubtitle">Keep up with the latest hot papers published in Australia</p>
                </div>
            </div>
        </div>
        
    )

}

export default WelcomeBanner