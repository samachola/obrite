import React, { Component } from 'react';
import Script from 'react-load-script';
import axios from 'axios';

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
    this.searchEvents = this.searchEvents.bind(this);
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
    if (address) {
      this.setState({
        city: address[0].long_name,
        query: addressObject.formatted_address,
        location: addressObject.geometry.location,
      })

      this.searchEvents();
    }
  }

  handleChange(event) {
    this.setState({
      query: event.target.value,
    })
  }

  async searchEvents() {
      if (this.state.location && this.state.location.lat() && this.state.location.lng() ) {
        const lat = this.state.location.lat();
        const lng = this.state.location.lng();
        const latlng = `${lat},${lng}`;
        const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=fGchp4gcJKe22eomi9nNMjD7Awn9vUFg&latlong=${latlng}`;

        try {
          const events = await axios.get(url);
          this.props.eventsByLocation(events.data._embedded.events)
        } catch(e) {
          console.error(e);
        }
        
      }
      
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
          onChange={this.handleChange}
          onKeyPress={this.searchEvents} />
      </div>
    )
  }
}

export default Search;
