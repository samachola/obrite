import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div className="col-md-12 mb-3 mb-md-0">
        <input type="text" id="event" className="form-control" placeholder="Location" />
      </div>
    )
  }
}

export default Search;
