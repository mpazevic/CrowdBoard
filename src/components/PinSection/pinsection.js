import React, { Component } from 'react';
import './pinsection-style.scss';

class PinSection extends Component {
  constructor(props) {
    super(props);

    this.state = { description: '' };
  }
  render() {
    return (
      <form className="description-form col-12">
        <div className="description-bar-container">
          <input
          maxLength="40"
          className="description-bar"
          placeholder="Enter a short description"
          value={this.state.description}
          onChange={event => this.onInputChange(event.target.value)} />
        </div>
        <button className="button">
          Pin it!
        </button>
      </form>
    );
  }

  onInputChange(description) {
    this.setState({description});
    this.props.onSearchTermChange(description);
  }

};

export default PinSection;
