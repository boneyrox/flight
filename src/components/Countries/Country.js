import React, { useState } from 'react';
import CountrySelect from 'react-bootstrap-country-select';


var val='';

 function Country(){

  const [ value, setValue ] = useState('United States'); 
  val=value;

  return (
    <CountrySelect
      value={value}
      onChange={setValue}
    />
  );

};
export {Country,val};