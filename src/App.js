import React, { useState } from 'react';
import './App.scss';
import SelectSearch from 'react-select-search';
import ReactPaginate from 'react-paginate';
import CloseIcon from './components/svg/CloseIcon';
import YouTubeEmbed from './components/YouTubeEmbed';
import GoogleIframe from './components/GoogleIframe';

function App({ moduleData, tableData }) {
  const [overlay, setOverlay] = useState(false);
  const [searchBrand, setSearchBrand] = useState('');

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

  const [data, setData] = useState(dataArray.slice(0, dataArray.length));
  const [pageNumber, setPageHumber] = useState(0);

  const options = [
    { name: 'Swedish', value: 'Swedish' },
    { name: 'English', value: 'English' },
  ];

  function createMarkup(content) {
    return { __html: `${content}` };
  }

  const [activeIndex, setActiveIndex] = useState(null);

  let activeStyle = { display: 'block' };
  let normalStyle = { display: 'none' };

  const handleClick = (i) => {
    setActiveIndex(i);
  };

  const dataPerPage = 6;
  const pagesVisited = pageNumber * dataPerPage;

  let objects = data;

  let results = [];
  const search = (toSearch) => {
    let terms = toSearch.split(' ');
    results.push(
      objects.filter((object) =>
        terms.every((term) => {
          return Object.values(object).some((value) =>
            value.toLowerCase().includes(term),
          );
        }),
      ),
    );
    return objects.filter((object) =>
      terms.every((term) => {
        return Object.values(object).some((value) =>
          value.toLowerCase().includes(term),
        );
      }),
    );
  };

  console.log(search(searchBrand.toLowerCase()));

  const displayData = data
    .slice(pagesVisited, pagesVisited + dataPerPage)
    .map((compData, index) => {
      const showPopup = () => {
        setOverlay(true);
        setActiveIndex(index);
      };

      const closePopup = () => {
        setOverlay(false);
        setActiveIndex(null);
      };

      return (
        <div key={index}>
          <div onClick={() => showPopup()} className="logo-box">
            {/* {company.company} */}
            <img width="100%" src={compData.image} alt="" />
            {/* <div
                  dangerouslySetInnerHTML={createMarkup(company.rich_text)}
                ></div> */}
          </div>

          <div
            style={activeIndex === index ? activeStyle : normalStyle}
            className="info-popUp"
          >
            <div onClick={() => closePopup()} className="close-svg-icon">
              <CloseIcon />
            </div>
            <div className="popUp-container">
              <div className="pop-logo">
                <img src={compData.image} alt={compData.company} />
              </div>
              <div
                dangerouslySetInnerHTML={createMarkup(compData.rich_text)}
                className="pop-content"
              ></div>
              {compData.youtube && (
                <div className="youTube">
                  <YouTubeEmbed embedId={compData.youtube} />
                </div>
              )}
              {compData.address_details !== 'null' && (
                <div
                  dangerouslySetInnerHTML={createMarkup(
                    compData.address_details,
                  )}
                  className="address-details"
                ></div>
              )}
              <div className="googleMap">
                <GoogleIframe searchWord={compData.location} />
              </div>
            </div>
          </div>
        </div>
      );
    });

  const pageCount = Math.ceil(data.length / dataPerPage);

  const changePage = ({ selected }) => {
    setPageHumber(selected);
  };

  return (
    <>
      {overlay && <div className="overlay-back"></div>}
      <section className="topco-d-container">
        <div className="topco-d-wrapper">
          <div className="topco-d-search-brand">
            <h2>
              <b>We</b> Are <b>Proud</b> Of <b>Our</b> Brands
            </h2>
            <div className="topco-d-search-brand-box">
              <input
                onChange={(e) => setSearchBrand(e.target.value)}
                type="search"
                list="brand-suggestions"
                placeholder="Search Brand"
              />
              <datalist id="brand-suggestions">
                {search(searchBrand.toLowerCase())?.map((brand, index) => {
                  return <option key={index}>{brand.company}</option>;
                })}
              </datalist>
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

          <div className="company-logos-grid">{displayData}</div>
          <div className="pagination-section">
            <ReactPaginate
              previousLabel={'<'}
              nextLabel={'>'}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={'paginationBttns'}
              previousClassName={'previousBttn'}
              nextLinkClassName={'nextBttn'}
              disabledClassName={'paginationDisabled'}
              activeClassName={'paginationActive'}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
