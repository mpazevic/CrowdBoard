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
      map: null,
      searchTerm: '',
      //UPDATE TO INCLUDE USER POSITION AS INITIAL LOCATION
      currentLocation: [],
      center: {
        lat: 37.871853,
        lng: -122.258423
      },
      markers: [{
        position: {
          lat: 37.871853,
          lng: -122.258423,
        },
        key: Date.now(),
        defaultAnimation: 2,
        icon: 'http://maps.google.com/mapfiles/ms/micons/purple-dot.png'
      }],
      zoom: 13,
      locations: [],
      showTable: false,
    }
  }

  onSearchTermChange(searchTerm) {
    this.setState({searchTerm})
  }

  //Check that the map is loaded and update state to include a reference
  //to the map
  mapLoaded(map) {
    if (this.state.map != null) {
      return
    } else {
      console.log("this is running");
      this.setState({map});
    }
  }

  queryPlacesAPI(queryTerm) {
    // Define variables used to query the Google places API
    const radius='5000';
    console.log("From query places API function (searchTerm): " + queryTerm);
    const location = `${JSON.stringify(this.state.currentLocation[0].position.lat)},${JSON.stringify(this.state.currentLocation[0].position.lng)}`
    console.log("From query places API function (location): " + location);
    const API_KEY = 'AIzaSyBLhPT7NFXEsWK-IrMWOSP3QzSPqb5qJUY'
    const queryString = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${queryTerm}&location=${location}&radius=${radius}&key=${API_KEY}`;
    console.log("This is the query string: " + queryString);


    const latitude = this.state.currentLocation[0].position.lat;
    const longitude = this.state.currentLocation[0].position.lng;

    var locationObject = new google.maps.LatLng(Number(latitude), Number(longitude));

    var request = {
      location: locationObject,
      radius: '5000',
      query: queryTerm
    };

    //Tried to use google api, but still get CORS error.
    const service = new google.maps.places.PlacesService(this.state.map);

    //This axios request does not work properly, but attempting to use Google's places
    //API still throws a CORS error. I used other npm libraries, but there is still an
    //internal server error...

    // axios.get(queryString)
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

  }

  handleMapClick(event) {
    this.setState({
      currentLocation: [{
        position: {
          lat: event.latLng.lat(),
          lng: event.latLng.lng()
        },
        key: Date.now(),
        defaultAnimation: 1,
      }]
    })

    console.log("App level state current location: " + JSON.stringify(this.state.currentLocation));
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
            <SearchBar
              onSearchTermChange={searchTerm => this.onSearchTermChange(searchTerm)}
              queryPlacesAPI={queryTerm => this.queryPlacesAPI(queryTerm)}/>
          </section>

          <section className="row map-section col-8">
            <div className="map-container" style={{width: `100%`, height: `100%`}}>
              <MapCard
                mapLoaded={map => {this.mapLoaded(map)}}
                markers={this.state.markers}
                currentLocation={this.state.currentLocation}
                // mapLoaded={map => this.mapLoaded(map)}
                handleMapClick={event => this.handleMapClick(event)}
                zoom={this.state.zoom}
                center={this.state.center}
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
