import React from 'react';

function CloseIcon({ show }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="122.881"
      height="122.88"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 122.881 122.88"
      xmlSpace="preserve"
      onClick={show}
    >
      <path
        fillRule="evenodd"
        d="M61.44 0c33.933 0 61.441 27.507 61.441 61.439 0 33.933-27.508 61.44-61.441 61.44C27.508 122.88 0 95.372 0 61.439 0 27.507 27.508 0 61.44 0zm20.279 36.226a3.49 3.49 0 014.936 4.936l-20.28 20.277 20.279 20.278a3.492 3.492 0 01-4.936 4.937L61.44 66.376 41.162 86.654a3.492 3.492 0 01-4.936-4.937l20.278-20.278-20.278-20.277a3.49 3.49 0 014.936-4.936L61.44 56.504l20.279-20.278z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default CloseIcon;
