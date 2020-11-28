import React from 'react';

const Country = (props) => {
    const country = props.country[0] //because the country recieved is a table of country, we extract the first element which is a country object
    console.log('country :>> ', country);
    console.log('country.languages :>> ', country.languages);
    return (
        <section>
            <h1>{country.name}</h1>
            <p>Capital : {country.capital}</p>
            <p>Population : {country.population}</p>

            <h2>Languages</h2>

            <ul>
                {country.languages.map((language) => 
                    <li key={language}>{language}</li>
                )}
            </ul>

            <img Style="width : 20%" src = {country.flag} alt={"Flag of "+country.name}></img>
        </section>
    );
};

export default Country;