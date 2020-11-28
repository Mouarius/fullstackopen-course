import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Submit from './components/Submit'
import Numbers from './components/Numbers'
import axios from 'axios'


const App = () => {
  //------    COMPONENT STATES    ------//
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ filterValue, setFilterValue ] = useState('')

  useEffect(() => {
    console.log('Fetching contacts from server...')
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("Successfully retrieved users from server :", response.data)
      setPersons(response.data)
    })
  },[])

  //------    EVENT HANDLERS    ------//
  const handleFilterChange = (event) => {
    console.log('Filter -> ', event.target.value)
    setFilterValue(event.target.value)
  }

  const handleNameChange = (event) => {
    console.log('Current input value : ', event.target.value);
    setNewName(event.target.value)
  }
  const handlePhoneChange = (event) => {
    console.log('Current phone value : ->' , event.target.value)
    setNewPhone(event.target.value)
  }

  //------    ADD PERSON BUTTON HANDLER    ------//

  const addPerson = (event) => {

    event.preventDefault()

    if (persons.map(person => person.name).includes(newName)) {
        console.log(`The entered name ${newName} already exists.`);
        alert(`${newName} already exists !`)
    }else{
        console.log('Submitted the value : ', newName);
        setPersons(persons.concat({name: newName, phone: newPhone}))
    }
  }
  //------    RETURN FIELD OF THE COMPONENT    ------//
  return (

    <div>
      <h2>Phonebook</h2>
      <Filter onChangeHandler={handleFilterChange}/>
      <Submit onSubmitHandler={addPerson} phoneChangeHandler={handlePhoneChange} nameChangeHandler={handleNameChange} nameValue={newName} phoneValue={newPhone}/>
      <h2>Numbers</h2>
      <Numbers persons={persons} filterValue={filterValue}/>
    </div>

  )
}

export default App