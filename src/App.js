import React from 'react';
import './App.scss';
import SelectSearch from 'react-select-search';

function App({ moduleData }) {
  // eslint-disable-next-line no-console
  console.log(
    'all of your data typically accessed via the "module" keyword in HubL is available as JSON here!',
    moduleData,
  );

  const options = [
    { name: 'Swedish', value: 'Swedish' },
    { name: 'English', value: 'English' },
  ];

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

        <div className="brand-dropdowns">
          <div className="topco-brand-selectors">
            <select name="brand-select" id="brand-select">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <SelectSearch
            options={options}
            name="language"
            placeholder="Brand Sector"
            search
          />
          <div className="results-btn">
            <button>See Results</button>
          </div>
        </div>

        <div className="company-logos-grid">
          {/* {moduleData.companies.map((company, index) => {
            return (
              <div key={index}>
                <img width="100%" src={company.company_logo.src} alt="" />
              </div>
            );
          })} */}
        </div>
      </div>
    </section>
  );
}

export default App;
