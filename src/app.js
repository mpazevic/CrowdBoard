import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../style/main.scss';
import Navbar from './components/Navbar/navbar';
import SearchBar from './components/SearchBar/searchbar';
import LocationList from './components/LocationList/locationlist';
import MapCard from './components/MapCard/mapcard';
import PinSection from './components/PinSection/pinsection';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      selectedLocation: "Give a starting coordinate",
      showTable: false,
    }
  }

  render() {
    return (
      <div className="content-wrapper">
        <header className="row">
          <nav className="navbar-section col-12">
            <Navbar />
          </nav>
        </header>

        <main className="container">
          <section className="row search-section">
            <SearchBar />
          </section>

          <section className="row map-section col-8">
            <div className="map-container" style={{width: `100%`, height: `100%`}}>
              <MapCard
                containerElement={
                  <div style={{height: `100%`}}/>
                }
                mapElement={
                  <div style={{height: `100%`}}/>
                } />
            </div>
          </section>

          <section className="row pin-section">
            <PinSection />
          </section>

        </main>
      </div>
    )
  }
}

ReactDOM.render( <App />, document.getElementById("container"));
