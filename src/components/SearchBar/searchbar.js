import React, { Component } from 'react';
import './searchbar-style.scss';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }
  render() {
    return (
      <form className="search-form col-12">
        <div className="search-bar">
          <input
          placeholder="Search"
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
        </div>
        <button className="button">
          Submit
        </button>
      </form>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

};

export default SearchBar;
