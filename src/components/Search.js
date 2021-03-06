
import { useState } from 'react';
import './Search.css';
import {default as SearchBox} from './SearchBox/App';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../logo.png';
import Result from './Result';
import React from 'react';

import Button from 'react-bootstrap/Button'



const styles={
    height:"10vh",
    padding:"1vh",
    width:"20vw",
    margin:"12vw"
    
   
}


function Search() {
    const [startDate, setStartDate] = useState(new Date());
    const [originCity, setOriginCity] = useState('');
    const [destCity, setDestCity] = useState('');

    const [fromCity,setFromCity]=useState('');
    const [toCity,setToCity]=useState('');
    const [travelDate,setTravelDate]=useState('');
    function setOrigin(value){
        setOriginCity(value);
    }

    function setDest(value){
        setDestCity(value);
    }
    const doIt=()=>{
        setFromCity(originCity);
        setToCity(destCity);
        setTravelDate(startDate.toISOString());
        console.log('called');

    }

    console.log("Origin",fromCity);
    console.log("Dest",toCity)
    console.log("startdate",travelDate);


    const ChildResult=({fromCity,toCity,travelDate})=>(
        <Result origin={fromCity} destination={toCity} date={travelDate} />
    )
    const MemoChild=React.memo(ChildResult);
  return (<>

  
<div className="container-fluid" id="navBar">
    <div className="row" id="rowLogo">
        <div className="col-sm"><img src={logo} alt="logo"/></div>
    </div>
    <div className="row" id="heading">
        <div className="col-sm-offset-0 col-sm-12"><h1>Book your flight with ease...</h1></div>
        <div className="w-100"></div>
        
        {/* <div className="col-sm-offset-0 col-sm-6"></div> */}
        <div className="col-sm" id="s1"><label style={{margin:"1vh"}}>Origin</label><SearchBox id="1" value={originCity} setOrigin={setOrigin} placeholder="Enter origin city"/></div>
        
        <div className="col-sm" id="s2"><label style={{margin:"1vh"}}>Destination</label><SearchBox id="2" value={destCity} setDest={setDest} placeholder="Enter destination city"/></div>
        
        <div className="col-sm"><label style={{margin:"1vh"}}>Departure</label><DatePicker  dateFormat="yyyy-MM-dd"  selected={startDate} inputStyle={styles} onChange={date => setStartDate(date)} /> </div>
        {/* <div className="col-sm"><label style={{margin:"1vh"}}>Arrival</label><DatePicker selected={startDate} inputStyle={styles} onChange={date => setStartDate(date)} /> </div> */}
        <div className="col-sm-1"><Button variant="warning" onClick={doIt} >Search</Button>{' '}</div>
    </div>
</div>

<MemoChild fromCity={fromCity} toCity={toCity} travelDate={travelDate}/>

  
  </>
    
  );
}

export default Search;
