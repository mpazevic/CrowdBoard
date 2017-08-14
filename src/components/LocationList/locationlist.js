import React from 'react';
import LocationListItem from '../LocationListItem/locationlistitem';

const LocationList = (props) => {

  const locationItems = props.locations.map((location) => {
    return (
      <LocationListItem
        //Function that I was going to create to keep track of which location has been clicked on
        //Planning on adding a bounce effect
        onLocationSelect={props.onLocationSelect}
        key={Date.now()}
        location={location} />
    )
  });

  return (
    <ul className="col-md-4 list-group">
      {locationItems}
    </ul>
  );
};

export default LocationList;
