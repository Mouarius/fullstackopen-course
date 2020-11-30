import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Submit from './components/Submit'
import Persons from './components/Persons'
import personService from './services/persons'


const App = () => {
  //------    COMPONENT STATES    ------//
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterValue, setFilterValue ] = useState('')

  useEffect(() => {
    console.log('Fetching contacts from server...')
    personService
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
    const newPerson = {name: newName, number: newNumber}

    if (persons.map(person => person.name).includes(newName)) {
        console.log(`The entered name ${newName} already exists.`);
        const personToModify = persons.find(person => person.name.toLowerCase() === newPerson.name.toLowerCase())
        const confirmation = window.confirm(`${newPerson.name} is already added to the phonebook, replace the old number with a new one ?`)

        if(confirmation){
          personService
            .update(personToModify, newPerson)
            .then((modifiedPerson) =>{
              const modifiedPersonList = [...persons] //Create a shallow copy of persons to further change is with the new modofied person
              modifiedPersonList.forEach(person => {
                if (person.name.toLowerCase() === modifiedPerson.name.toLowerCase()){
                  person.number = modifiedPerson.number
                }
              })
              setPersons(modifiedPersonList)
              setNewName('')
              setNewNumber('')
            })
        }
        
    }else{
        console.log('Submitted the value : ', newName);
        personService
          .create(newPerson)
          .then(addedPerson =>{
            setPersons(persons.concat(addedPerson))
            console.log(`Successfully added ${newPerson.name} with the number ${newPerson.number}`);
            setNewName('')
            setNewNumber('')
          })
    }
  }

  const removePerson = (id) => {
    const personToDelete = persons.find(person => person.id === id)
    console.log('personToDelete :>> ', personToDelete);
    const confirmation = window.confirm(`Are you sure you want to delete ${personToDelete.name} from your contacts ?`)
    console.log('confirmation :>> ', confirmation);
    if (confirmation){
      personService
      .remove(personToDelete)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
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
        deletePersonHandler={removePerson}
      />
    </div>

  )
}

export default App