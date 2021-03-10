
import { useState } from 'react';
import './Search.css';
import {default as SearchBox} from './SearchBox/App';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../logo.png';
import {Country,val} from './Countries/Country';
import Button from 'react-bootstrap/Button'



const styles={
    height:"10vh",
    padding:"1vh",
    width:"20vw",
    margin:"12vw"
    
   
}


function Search() {
    const [startDate, setStartDate] = useState(new Date());
  return (<>

  {/* <div id="parent">
      <div id="container" >
          <h1>Search flights on the go...</h1>
          <div id="search">
                <SearchBox placeholder="Type Origin Place"/>
                 <SearchBox placeholder="Type Destination Place"/>
<DatePicker selected={startDate} inputStyle={styles} onChange={date => setStartDate(date)} />      
    </div>
      </div>
  </div> */}
<div className="container-fluid" id="navBar">
    <div className="row" id="rowLogo">
        <div className="col-sm"><img src={logo} alt="logo"/></div>
    </div>
    <div className="row" id="heading">
        <div className="col-sm-offset-0 col-sm-12"><h1>Book your flight with ease...</h1></div>
        
        {/* <div className="col-sm-offset-0 col-sm-6"></div> */}
        <div className="col-sm" id="s1"><label style={{margin:"1vh"}}>Origin</label><SearchBox/></div>
        
        <div className="col-sm" id="s2"><label style={{margin:"1vh"}}>Destination</label><SearchBox/></div>
        
        <div className="col-sm"><label style={{margin:"1vh"}}>Departure</label><DatePicker  selected={startDate} inputStyle={styles} onChange={date => setStartDate(date)} /> </div>
        <div className="col-sm"><label style={{margin:"1vh"}}>Arrival</label><DatePicker selected={startDate} inputStyle={styles} onChange={date => setStartDate(date)} /> </div>
        <div className="col-sm-1"><Button variant="warning">Search</Button>{' '}</div>
    </div>
</div>

  
  </>
    
  );
}

export default Search;
