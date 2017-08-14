import React from 'react';

const LocationListItem = ({location, onLocationSelect}) => {
  // const imageURL = video.snippet.thumbnails.default.url;
  return (
    <li onClick={() => onLocationSelect(location)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageURL} />
        </div>

        <div className="media-body">
          <div className="media-heading">{location}</div>
        </div>

      </div>

    </li>
  )
};

export default LocationListItem;
