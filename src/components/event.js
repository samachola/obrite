import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
class Event extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="speaker text-left">
          <Link href="/" className="d-block mb-3 thumbnail">
            <img src={this.props.event.images[0].url} alt="obrite" className="img-fluid" />
          </Link>
          <h3 className="heading mb-0"><Link href="#"><span>{this.props.event.name}</span></Link></h3>
          <p>{this.props.event.dates.start.localDate} </p>
        </div>
      </div>
    )
  }

}

export default Event;
