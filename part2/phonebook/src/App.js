import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Submit from './components/Submit'
import Persons from './components/Persons'
import personsServices from './services/personsServices'


const App = () => {
  //------    COMPONENT STATES    ------//
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterValue, setFilterValue ] = useState('')

  useEffect(() => {
    console.log('Fetching contacts from server...')
    personsServices
      .getAll()
      .then(personsFromServer => setPersons(personsFromServer))
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
    setNewNumber(event.target.value)
  }

  //------    ADD PERSON BUTTON HANDLER    ------//

  const addPerson = (event) => {

    event.preventDefault()

    if (persons.map(person => person.name).includes(newName)) {
        console.log(`The entered name ${newName} already exists.`);
        alert(`${newName} already exists !`)
    }else{
        console.log('Submitted the value : ', newName);
        const newPerson = {name: newName, number: newNumber}
        personsServices
          .create(newPerson)
          .then(addedPerson =>{
            setPersons(persons.concat(addedPerson))
            console.log(`Successfully added ${newPerson.name} with the number ${newPerson.number}`);
            setNewName('')
            setNewNumber('')
          })
    }
  }
  //------    RETURN FIELD OF THE COMPONENT    ------//
  return (

    <div>
      <h2>Phonebook</h2>
      <Filter onChangeHandler={handleFilterChange}/>
      <Submit 
        onSubmitHandler={addPerson} 
        phoneChangeHandler={handlePhoneChange} 
        nameChangeHandler={handleNameChange} 
        nameValue={newName} 
        phoneValue={newNumber}
      />
      <h2>Persons</h2>
      <Persons 
        persons={persons} 
        filterValue={filterValue}
      />
    </div>

  )
}

export default App