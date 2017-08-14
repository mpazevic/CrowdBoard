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

  //Keep track of when map is moved to update markers
  //Was going to use this function to dynamically update locations when the user drags the map
  mapMoved() {
    console.log('Map moved. New center: ' + JSON.stringify(this.state.map.getCenter()))
  }

  render() {
    const markers = this.props.markers || []
    const currentLocation = this.props.currentLocation || []
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
