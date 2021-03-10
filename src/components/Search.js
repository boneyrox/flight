
import { useState } from 'react';
import './Search.css';
import {default as SearchBox} from './SearchBox/App';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../logo.png';
import {Country,val} from './Countries/Country';



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
<div class="container" id="navBar">
    <div class="rowLogo">
        <div class="col-sm-offset-0 col-sm-5"><img src={logo} alt="logo"/></div>
    </div>
    <div class="heading">
        <div class="col-sm-offset-0 col-sm-12"><h1>Book your flight with ease...</h1></div>
        <div class="col-sm-2"><label >One-way</label></div>
        <div class="col-sm-2"><label >Single</label></div>
        <div class="col-sm-2"><Country/>{console.log(val)}</div>
        <div class="col-sm-offset-0 col-sm-6"></div>
        <div class="col-sm-offset-0 col-sm-2" id="s1"><SearchBox/></div>
        <div class="col-sm-offset-0 col-sm-1"></div>
        <div class="col-sm-2" id="s2"><SearchBox/></div>
        <div class="col-sm-2"></div>
        <div class="col-sm-offset-0 col-sm-2"></div>
        <div class="col-sm-offset-0 col-sm-2"></div>
    </div>
</div>

  
  </>
    
  );
}

export default Search;
