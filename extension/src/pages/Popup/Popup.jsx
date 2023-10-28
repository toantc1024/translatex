import React, { useEffect } from 'react';
import './Popup.css';
import MenuBar from './Components/MenuBar';
import Main from './Components/Main';

const Popup = () => {
  return (
    <div className="App">
      <MenuBar />
      <Main />
      {/* <Main /> */}
      {/* <button
          className="rounded-lg shadow-sm bg-white p-4"
          onClick={async () => {
            
          }}
        >
          Lookup
        </button> */}
    </div>
  );
};

export default Popup;
