import React, { useState } from 'react';
import './App.scss';
import CustomSelect from './components/CustomSelect';
import { countries } from './data';

function App({ moduleData }) {
  // eslint-disable-next-line no-console
  console.log(
    'all of your data typically accessed via the "module" keyword in HubL is available as JSON here!',
    moduleData,
  );

  const [formData, setFormData] = useState({
    countryOne: {
      value: '',
      error: '',
    },

    countryTwo: {
      value: 'Croatia',
      error: '',
    },
  });

  const submitHandler = (e) => {
    e.preventDefault();

    let errors = {};

    for (let key in formData) {
      if (formData[key].value === '') {
        errors[key] = 'Please select one option';
      }
    }

    if (Object.keys(errors).length === 0) {
      console.log(formData.countryOne, formData.countryTwo.value);
      console.log('submit form...');
    } else {
      setFormData((prev) => {
        let data = {};
        for (let key in errors) {
          data[key] = {
            ...prev[key],
            error: errors[key],
          };
        }

        return {
          ...prev,
          ...data,
        };
      });
    }
  };

  const changeHandler = (value, name) => {
    setFormData((prev) => ({
      ...prev,
      [name]: {
        value,
        error: value !== '' ? '' : prev[name].error,
      },
    }));
  };

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
        <div className="topco-brand-sectors">
          <form action="" onSubmit={submitHandler}>
            <CustomSelect
              label={'Select a country'}
              searchPlaceholder="Search"
              data={countries}
              value={formData.countryOne.value}
              onChange={changeHandler}
              error={formData.countryOne.error}
              name="countryOne"
            />
            <CustomSelect
              label={'Select another country'}
              data={countries}
              value={formData.countryTwo.value}
              onChange={changeHandler}
              error={formData.countryTwo.error}
              name="countryOne"
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default App;
