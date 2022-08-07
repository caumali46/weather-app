import React from'react'; 
import Form from 'react-bootstrap/Form'; 

const CountriesDropdown = (props) => {
  const{ allCountries, handleSelectCountry } = props;
  if( !allCountries || allCountries?.length <= 0) {
    return null;
  }
  return ( 
    <Form.Select onChange={handleSelectCountry}> 
      { allCountries?.map((weather ,key)=> {
        return  <option key={key} value={`${weather.name.common}`}>
            {weather.name.common}
          </option>
      })}
    </Form.Select>
  );
}
export default CountriesDropdown;
