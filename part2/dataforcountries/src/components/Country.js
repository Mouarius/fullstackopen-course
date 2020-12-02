import React, {useState} from 'react';

const Country = (props) => {

    const country = props.country
    // console.log('country :>> ', country);
    // console.log('country.languages :>> ', country.languages);

    if(country !== null)
    {
        return (
            <section>
                <h2>{country.name}</h2>
                <p>Capital : {country.capital}</p>
                <p>Population : {country.population}</p>

                <h2>Languages</h2>

                <ul>
                    {country.languages.map((language) => 
                        <li key={language}>{language}</li>
                    )}
                </ul>

                <img width='20%' src = {country.flag} alt={"Flag of "+country.name}></img>
            </section>
        );   
    }else{
        return(null)
    }
};

export default Country;