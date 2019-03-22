import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
class Event extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let price = this.props.event.priceRanges && this.props.event.priceRanges[0];
    price = price || {};

    return (
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="speaker text-left">
          <Link href="/" className="d-block mb-3 thumbnail">
            <img src={this.props.event.images[0].url} alt="obrite" className="img-fluid" />
          </Link>
          <h5 className="heading mb-0"><Link href="#"><span>{this.props.event.name}</span></Link></h5>
          <p>{this.props.event.dates.start.localDate} | { price.currency } {price.max}</p>
        </div>
      </div>
    )
  }

}

export default Event;
