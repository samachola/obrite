import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import axios from 'axios';

import Search from './search.js';

class Events extends Component {

  constructor(props) {
    super(props);
    this.state = { title: 'Search For Obrite Events'};
  }

  componentDidMount() {
    axios.get('https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=fGchp4gcJKe22eomi9nNMjD7Awn9vUFg')
      .then(res => console.log(res))
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
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="speaker text-left">
                  <Link href="/" className="d-block mb-3 thumbnail">
                    <img src="assets/images/person_1.jpg" alt="obrite" className="img-fluid" />
                  </Link>
                  <h3 className="heading mb-0"><Link href="#"><span>Will</span> Peters</Link></h3>
                  <p>Business Consultant in Google</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="speaker text-left">
                  <Link href="/" className="d-block mb-3 thumbnail"><img src="assets/images/person_2.jpg" alt="obrite" className="img-fluid" /></Link>
                  <h3 className="heading mb-0"><Link href="#"><span>Abigail</span> McMillan</Link></h3>
                  <p>Business Consultant in Facebook</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="speaker text-left">
                  <Link href="/" className="d-block mb-3 thumbnail"><img src="assets/images/person_3.jpg" alt="obrite" className="img-fluid" /></Link>
                  <h3 className="heading mb-0"><Link href="#"><span>Jean</span> Keenan</Link></h3>
                  <p>Business Consultant in Medium</p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mb-4">
                <div className="speaker text-left">
                  <Link href="/" className="d-block mb-3 thumbnail"><img src="assets/images/person_4.jpg" alt="obrite" className="img-fluid" /></Link>
                  <h3 className="heading mb-0"><Link href="#"><span>Justin</span> Clark</Link></h3>
                  <p>Business Consultant in Slack</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="speaker text-left">
                  <Link href="/" className="d-block mb-3 thumbnail"><img src="assets/images/person_5.jpg" alt="obrite" className="img-fluid" /></Link>
                  <h3 className="heading mb-0"><Link href="#"><span>Bryan</span> Forster</Link></h3>
                  <p>Business Consultant in WordPress</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="speaker text-left">
                  <Link href="/" className="d-block mb-3 thumbnail"><img src="assets/images/person_6.jpg" alt="obrite" className="img-fluid" /></Link>
                  <h3 className="heading mb-0"><Link href="#"><span>Matt</span> Nelson</Link></h3>
                  <p>Business Consultant in Evernote</p>
                </div>
              </div>

            </div>
          </div>
        </div>
    );
  }
}

export default Events;
