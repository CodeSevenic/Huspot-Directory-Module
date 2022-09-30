import React from 'react';
import './GoogleIframe.scss';

const GoogleIframe = ({ searchWord }) => {
  let searchText = searchWord.replace(/ /g, '%20');
  return (
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe
          width="654"
          height="500"
          id="gmap_canvas"
          src={`https://maps.google.com/maps?q=${searchText}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleIframe;
