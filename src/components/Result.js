
import axios from "axios";
import React, { useEffect, useState } from 'react';

// const options = {
//   method: 'GET',
//   url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/UK/GBP/en-UK/BOM-sky/AMD-sky/2021-03-21',
//   params: {inboundpartialdate: '2019-12-01'},
//   headers: {
//     'x-rapidapi-key': 'a3607f0573mshe1c67d353f94a73p111dcbjsn3eec22f4b0bc',
//     'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
//   }
// };

// try{axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });}
// catch(err){
//     console.log(err);
// }

function Result(props) {
    const [price,setPrice]=useState('n/A')
    const [dataInputs,setDataInputs]=useState({});

    const date=props.date.substr(0, 10);
    console.log('havsbcubeiubciuebcwie',date)
    // const options = {
    //     method: 'GET',
    //     url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/IN/INR/en-IN/${props.origin}/${props.destination}/${date}`,
    //     params: { inboundpartialdate: ' ' },
    //     headers: {
    //         'x-rapidapi-key': 'a3607f0573mshe1c67d353f94a73p111dcbjsn3eec22f4b0bc',
    //         'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
    //     }
    // };
    
        const options = {
        method: 'GET',
        url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/IN/INR/en-IN/${props.origin}/${props.destination}/${date}`,
        params: { inboundpartialdate: ' ' },
        headers: {
            'x-rapidapi-key': 'a3607f0573mshe1c67d353f94a73p111dcbjsn3eec22f4b0bc',
            'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
        }
    };
        
        
    
     useEffect(async () => {
    const result = await axios.request(options).then(function (response) {
        console.log(response.data);
        setDataInputs(response.data);
        console.log("datainputs",dataInputs.Quotes[0].MinPrice);
        setPrice(dataInputs.Quotes[0].MinPrice);
        
    }).catch(function (error) {
        console.error(error);
    });
 
    
  },[options]);

   


return (<>

<div>
    
        {/* <ShowPrice price={price}/> */}
          <h1>Min Price:{price}</h1>
    

</div>
</>

);
}

export default Result;
