import React, { Component } from "react";
import { CountryDropdown } from "react-country-region-selector";

class Countries extends Component {
  state = {
    country: "",
  };

  selectCountry = (val) => {
    this.props.handleCountryChange(val);
    this.setState({ country: val });
  };

  render() {
    const { country } = this.state;
    return (
      <div>
        <CountryDropdown
          value={country}
          defaultOptionLabel="Select a country to search"
          // priorityOptions={["AU"]}
          onChange={(val) => this.selectCountry(val)}
        />
      </div>
    );
  }
}

export default Countries;
