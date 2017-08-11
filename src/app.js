import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../style/main.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nothing: "nothing"
    }
  }

  render() {
    return (
      <div className="test">
        <div className="something">Simple update for map app--all base code now included</div>
      </div>
    )
  }
}

ReactDOM.render( <App />, document.querySelector(".container"));
