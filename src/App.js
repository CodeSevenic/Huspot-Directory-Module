import React, { useState } from 'react';
import './App.scss';
import SelectSearch from 'react-select-search';
import ReactPaginate from 'react-paginate';

function App({ moduleData, tableData }) {
  const { companies } = moduleData;
  console.log(companies);

  // let stringArray = tableData;
  let stringArray = tableData.slice(1, -1).split('},');

  let storeArray = [];

  stringArray.forEach((element, idx, array) => {
    if (idx !== array.length - 1) {
      storeArray.push(element + '}');
    } else {
      storeArray.push(element);
    }
  });

  const finalArray = [];

  storeArray.forEach((element) => {
    let fArray = element.split('"').join('');
    finalArray.push(fArray);
  });
  const dataArray = [];

  finalArray.forEach((element) => {
    dataArray.push(eval('(' + element + ')'));
  });

  const [data, setData] = useState(dataArray.slice(0, 6));

  const options = [
    { name: 'Swedish', value: 'Swedish' },
    { name: 'English', value: 'English' },
  ];

  // function createMarkup(content) {
  //   return { __html: `${content}` };
  // }

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
          {dataArray.map((company, index) => {
            return (
              <div className="logo-box" key={index}>
                {/* {company.company} */}
                <img width="100%" src={company.image} alt="" />
                {/* <div
                  dangerouslySetInnerHTML={createMarkup(company.rich_text)}
                ></div> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default App;
