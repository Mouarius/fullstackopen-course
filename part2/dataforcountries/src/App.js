import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Country from './components/Country'
import Filter from './components/Filter'

const App = () => {
    const [filter, setFilter] = useState('')
    const [countries, setCountries] = useState([])

    const countryToShow = countries.filter(country => country.nameLowerCase.includes(filter.toLowerCase()))
    console.log('countryToShow :>> ', countryToShow);

    const handleFilterChange = (event) => {
        console.log('Filter value -> ', event.target.value);
        setFilter(event.target.value)
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
        {countryToShow.length === 1 ? <Country country={countryToShow}/>  : <div>Too many countries to show, try to refine your research</div>}
    </div>)
}
export default App
