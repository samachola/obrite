import React, { Component } from 'react';
import Script from 'react-load-script';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      query: ''
    }

    this.handleScriptLoad = this.handleScriptLoad.bind(this);
    this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleScriptLoad() {
    const google = window.google;
    const options = { type: ['(cities)']};

    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'),
      options
    );

    console.log(this.autocomplete);

    this.autocomplete.addListener('place_changed', this.handlePlaceSelect)
  }

  handlePlaceSelect() {
    let addressObject = this.autocomplete.getPlace();
    let address = addressObject.address_components;
    console.log('address', address);
    console.log(addressObject);
    if (address) {
      this.setState({
        city: address[0].long_name,
        query: addressObject.formatted_address,
      })
    }
  }

  handleChange(event) {
    this.setState({
      query: event.target.value,
    })
  }

  render() {
    return (
      <div className="col-md-12 mb-3 mb-md-0">
          <Script 
            url="https://maps.googleapis.com/maps/api/js?key=AIzaSyCi5s8s6hthogs8ch_fdtPLbOUFmZHGPso&libraries=places&language=en"
            onLoad={this.handleScriptLoad} />
        <input 
          type="text" 
          id="autocomplete" 
          className="form-control" 
          placeholder="Location" 
          value={this.state.query}
          onChange={this.handleChange} />
      </div>
    )
  }
}

export default Search;
