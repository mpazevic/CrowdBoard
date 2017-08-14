import React, { Component } from 'react';
import './searchbar-style.scss';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    };
  }
  render() {
    return (
      <form onSubmit={ event => {
        event.preventDefault();
        this.props.queryPlacesAPI(this.state.searchTerm);}}
        className="search-form col-12">
        <div className="search-bar">
          <input
          className="form-control"
          placeholder="Search"
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
        </div>
        <button type="submit" className="btn search-form-submit-button">
          Submit
        </button>
      </form>
    );
  }

  onInputChange(searchTerm) {
    this.setState({searchTerm});
    this.props.onSearchTermChange(searchTerm);
  }

};

export default SearchBar;
