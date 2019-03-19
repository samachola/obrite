import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <div className="site-blocks-cover overlay" style={{ backgroundImage: 'url(assets/images/hero_1.jpg)'}} data-aos="fade" data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-10 text-center" data-aos="fade">
              <h1 className="mb-4">The Challenges of Business Innovation</h1>
              <p className="mb-5">April 17-21, 2019; Vancouver</p>
              <p className="regular-font-size">
                <Link to="/" className="btn btn-primary px-4 py-3 text-uppercase">Get Your Ticket</Link>
                <span className="mx-3">or</span>
                <Link to="/" className="text-white">Learn More</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
