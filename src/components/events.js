import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import axios from 'axios';

import Search from './search.js';
import Event from './event.js'

class Events extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Search For Obrite Events',
      events: [],
    };
    
    this.getEvents = this.getEvents.bind(this);
  }

  componentDidMount() {
    this.getEvents();
  }

  getEvents() {
    // TODO get list of events based on location
    axios.get('https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=fGchp4gcJKe22eomi9nNMjD7Awn9vUFg')
      .then(res => {
        this.setState({events: [...res.data._embedded.events]});
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mx-auto text-center mb-5 section-heading">
                <h3 className="mb-5 text-uppercase">{ this.state.title }</h3>
                <Search />

              </div>
            </div>
            <div className="row">
              {
                this.state.events.length && this.state.events.map((event) => (
                  <Event event={event} key={event.id} />
                ))
              }
            </div>
          </div>
        </div>
    );
  }
}

export default Events;
