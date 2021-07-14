import React from "react";

const LikeCountries = (props) => {

    const localCountry = JSON.parse(sessionStorage.getItem("likedata"));
    return(<>
    {localCountry ?
  
      localCountry.map((country)=>(
        <div >
          <h1>{country.countryName}</h1>
          <img src = {country.countryFlag}></img>
        </div>
      )):
      <h1>No liked flags</h1>
      }
       
      
        </>)
}

export default LikeCountries;