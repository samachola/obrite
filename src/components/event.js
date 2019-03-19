import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
class Event extends Component {
  constructor(props) {
    super(props);

    this.state = { event: this.props.event };
  }

  render() {
    return (
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="speaker text-left">
          <Link href="/" className="d-block mb-3 thumbnail">
            <img src="assets/images/person_1.jpg" alt="obrite" className="img-fluid" />
          </Link>
          <h3 className="heading mb-0"><Link href="#"><span>Will</span> Peters</Link></h3>
          <p>Business Consultant in Google | { this.state.event.name }</p>
        </div>
      </div>
    )
  }

}

export default Event;
