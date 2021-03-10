import React, { useState, useEffect,useRef } from 'react';
import Autosuggest from 'react-bootstrap-autosuggest';
import './app.css';


const styles = {
    height: "5vh",
    padding: "1vh",
    width: "20vw",
    margin: "2vw",
    display: "flex",
    flexDirection: "row"

}


const cities = [
    {
      PlaceId: 'MAN-sky',
      PlaceName: 'Manchester',     
      CountryId: 'UK-sky',
      RegionId: '',
      CityId: 'MANC-sky',
      CountryName: 'United Kingdom'
    },
    {
      PlaceId: 'LOND-sky',
      PlaceName: 'London',
      CountryId: 'UK-sky',
      RegionId: '',
      CityId: 'LOND-sky',
      CountryName: 'United Kingdom'
    },
    {
      PlaceId: 'LHR-sky',
      PlaceName: 'London Heathrow',
      CountryId: 'UK-sky',
      RegionId: '',
      CityId: 'LOND-sky',
      CountryName: 'United Kingdom'
    },
    {
      PlaceId: 'LGW-sky',
      PlaceName: 'London Gatwick',
      CountryId: 'UK-sky',
      RegionId: '',
      CityId: 'LOND-sky',
      CountryName: 'United Kingdom'
    },
    {
      PlaceId: 'STN-sky',
      PlaceName: 'London Stansted',
      CountryId: 'UK-sky',
      RegionId: '',
      CityId: 'LOND-sky',
      CountryName: 'United Kingdom'
    },
    {
      PlaceId: 'LTN-sky',
      PlaceName: 'London Luton',
      CountryId: 'UK-sky',
      RegionId: '',
      CityId: 'LOND-sky',
      CountryName: 'United Kingdom'
    },
    {
      PlaceId: 'LCY-sky',
      PlaceName: 'London City',
      CountryId: 'UK-sky',
      RegionId: '',
      CityId: 'LOND-sky',
      CountryName: 'United Kingdom'
    },
    {
      PlaceId: 'SEN-sky',
      PlaceName: 'London Southend',
      CountryId: 'UK-sky',
      RegionId: '',
      CityId: 'LOND-sky',
      CountryName: 'United Kingdom'
    },
    {
      PlaceId: 'BHX-sky',
      PlaceName: 'Birmingham',
      CountryId: 'UK-sky',
      RegionId: '',
      CityId: 'BIRM-sky',
      CountryName: 'United Kingdom'
    },
    {
      PlaceId: 'EDI-sky',
      PlaceName: 'Edinburgh',
      CountryId: 'UK-sky',
      RegionId: '',
      CityId: 'EDIN-sky',
      CountryName: 'United Kingdom'
    }
  ];


const App = (props) => {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState(cities);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);



  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = event => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  const updateSearch = value => {
    setSearch(value);
    setDisplay(false);
  };
  if(props.id==1){
      props.setOrigin(search)
  }
  else{
      props.setDest(search)
  }

  return (
    <div ref={wrapperRef} className="flex-container flex-column pos-rel">
      <input
        id="auto"
        onClick={() => setDisplay(!display)}
        placeholder={props.placeholder}
        value={search}
        onChange={event => setSearch(event.target.value)}
      />
      {display && (
        <div className="autoContainer">
          {options
            .filter(({ PlaceName }) => PlaceName.indexOf(search.toLowerCase()) > -1)
            .map((value, i) => {
              return (
                <div
                  onClick={() => updateSearch(value.PlaceId)}
                  className="option"
                  key={i}
                  tabIndex="0"
                >
                  <span>{value.PlaceName}</span>
              <p>{value.PlaceId}</p>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default App;
