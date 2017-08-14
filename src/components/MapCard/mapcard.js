import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class MapCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: this.props.map,
      currentLocation: this.props.currentLocation,
      searchTerm: this.props.searchTerm,
    }
  }

  queryPlacesAPI(queryTerm) {
    const searchTerm = this.state.searchTerm.trim().replace(' ', '+');
    // console.log("From query places API function (searchTerm): " + searchTerm);
    const location = `${JSON.stringify(this.state.currentLocation[0].position.lat)},${JSON.stringify(this.state.currentLocation[0].position.lng)}`
    // console.log("From query places API function (location): " + location);
    const radius='5000'
    const API_KEY = 'AIzaSyCzKfcJYVO9eAnOjg4baBBgbH-QZE07GbA'
    const queryString = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${searchTerm}&location=${location}&radius=${radius}&key=${API_KEY}`;
    console.log("This is the query string: " + queryString);
    // Make a places API request using user-selected location


    // axios.get(queryString)
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }

  //Keep track of when map is moved to update markers
  mapMoved() {
    console.log('Map moved. New center: ' + JSON.stringify(this.state.map.getCenter()))
  }

  render() {
    const markers = this.props.markers || []
    const currentLocation = this.props.currentLocation || []
    // console.log("This is the current location in mapCard " + JSON.stringify(currentLocation));
    // console.log("These are the markers in mapCard " + JSON.stringify(markers));
    return (
      <GoogleMap
        ref={this.props.mapLoaded.bind(this)}
        onDragEnd={this.mapMoved.bind(this)}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
          draggableCursor: 'crosshair'
        }}
        onClick={event => this.props.handleMapClick(event)}
        defaultZoom={this.props.zoom}
        defaultCenter={this.props.center}>
        {currentLocation.map((marker, index) => (
          <Marker {...marker} />
        ))}
        {markers.map((marker, index) => (
          <Marker {...marker} />
        ))}
      </GoogleMap>
    )
  }
}

export default withGoogleMap(MapCard);
