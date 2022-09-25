import React from 'react';
import './App.scss';

function App({ moduleData }) {
  // eslint-disable-next-line no-console
  console.log(
    'all of your data typically accessed via the "module" keyword in HubL is available as JSON here!',
    moduleData,
  );
  return (
    <section className="topco-d-container">
      <div className="topco-d-wrapper">
        <div className="topco-d-search-brand">
          <h2>
            <b>We</b> Are <b>Proud</b> Of <b>Our</b> Brands
          </h2>
          <div className="topco-d-search-brand-box">
            <input type="search" name="" id="" placeholder="Search Brand" />
          </div>
        </div>
        <div className="topco-brand-selectors">
          <select name="brand-select" id="brand-select">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </div>
    </section>
  );
}

export default App;
