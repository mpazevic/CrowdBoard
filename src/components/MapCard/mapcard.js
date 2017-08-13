import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class MapCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const markers = this.props.markers || []
    return (
      <GoogleMap
        defaultZoom={3}
        defaultCenter={{ lat: -25.363882, lng: 131.044922 }}>
        {markers.map((marker, index) => (
        <Marker {...marker} />
        ))}
      </GoogleMap>
    )
  }
}

export default withGoogleMap(MapCard);
