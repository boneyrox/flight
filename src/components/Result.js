
import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/UK/GBP/en-UK/BOM-sky/AMD-sky/2021-03-21',
  params: {inboundpartialdate: '2019-12-01'},
  headers: {
    'x-rapidapi-key': 'a3607f0573mshe1c67d353f94a73p111dcbjsn3eec22f4b0bc',
    'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
  }
};

try{axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});}
catch(err){
    console.log(err);
}
function Result(props) {

    
    const options = {
  method: 'GET',
  url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/UK/GBP/en-UK/${props.origin}/${props.destination}/${props.dates.substr(0,9)}`,
  params: {inboundpartialdate: ' '},
  headers: {
    'x-rapidapi-key': 'a3607f0573mshe1c67d353f94a73p111dcbjsn3eec22f4b0bc',
    'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
  }
};

try{axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});}
catch(err){
    console.log(err);
}
  return (<>

  
  </>
    
  );
}

export default Result;
