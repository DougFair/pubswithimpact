import React from 'react'

const SubHeading = () => {
    return (
    <div className="subBanner" style={{margin: "0 20px"
}}>
        <p className="subBannerText" style={{lineHeight: 1.3, fontSize: "0.9rem"
        }}>All scientists like to keep abreast of what is being published by their colleagues. <span style={{fontWeight: "bold", fontStyle: "italic", color: "red" }}>"Aussie Pubs with Impact"</span> is an easy way to view the latest biomed papers published by Australian scientists in the most influential journals. The journals we monitor are chosen by our panel of experienced life scientists who feel they are at the top of the field or widely regarded as being important, irrespective of impact factor.</p>
        <p style={{textAlign:"center", fontWeight: "bold"}}><span style={{color:"red"}}>NEW: </span>You can now search top pubs by country via the dropdown menu below...</p>
        <hr style={{marginTop: "20px"}}/>
    </div>
    )
}

export default SubHeading

