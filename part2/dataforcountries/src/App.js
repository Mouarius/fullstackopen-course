import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Country from './components/Country'
import Filter from './components/Filter'

const App = () => {
    const [filter, setFilter] = useState('')
    const [countries, setCountries] = useState([])
    const [countryToShow, setCountryToShow] = useState(null)

    const filteredCountries = countries.filter(country => country.nameLowerCase.includes(filter.toLowerCase()))

    const handleFilterChange = (event) => {
        console.log('Filter value -> ', event.target.value);
        setFilter(event.target.value)
        setCountryToShow(null)
    }

    const showCountryInfo = (country) => {
        console.log('Actually showing the country : ' + country.name);
        setCountryToShow(country)
    }
    useEffect(()=>{
        axios
        .get("https://restcountries.eu/rest/v2/all")
        .then((response) => {
                console.log("Fetching data from https://restcountries.eu/rest/v2/all...")
                const usefullData = response.data.map(country => ({
                    name : country.name,
                    nameLowerCase : country.name.toLowerCase(),
                    capital : country.capital,
                    population : country.population,
                    languages : country.languages.map(language => language.name),
                    flag: country.flag
                }))
                setCountries(usefullData)
                console.log("Successfully recieved data : ", usefullData);
            }
        )
    },[])


    return(
    <div>
        <Filter filterChangeHandler={handleFilterChange}/>
        <ul>
            {filteredCountries.length <=10 
            ? filteredCountries.map(country => 
                    <li key={country.name}>{country.name} <button onClick={() => showCountryInfo(country)}>show</button></li>
            )
            : null}
        </ul>
        <Country country={countryToShow}/>
    </div>)
}
export default App
