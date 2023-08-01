import React from "react";
import "./WelcomeBanner.css";
import "./DateInput.css";

const WelcomeBanner = (props) => {
  let displayCountry = "";

  if (props.country.slice(-1) !== "s") {
    displayCountry = `${props.country.toUpperCase()}'S`;
  } else {
    displayCountry = `${props.country.toUpperCase()}'`;
  }

  return (
    <div>
      <div className="container">
        <div className="bannerText">
          <p className="bannerTitle">
            {displayCountry} PUBS WITH{" "}
            <span style={{ color: "red", fontStyle: "italic" }}>IMPACT!</span>
          </p>
          <p className="bannerSubtitle">
            Keep up with the latest hot papers from {props.country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
