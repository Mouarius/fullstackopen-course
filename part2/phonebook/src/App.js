import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  console.log(persons);
  const [ newName, setNewName ] = useState('')

  const handleNameChange = (event) => {
    console.log('Current input value : ', event.target.value);
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.map(person => person.name).includes(newName)) {
        console.log(`The entered name ${newName} already exists.`);
        alert(`${newName} already exists !`)
    }else{
        console.log('Submitted the value : ', newName);
        setPersons(persons.concat({name: newName}))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleNameChange} type='text' value={newName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
          {persons.map(person => 
            <li key={person.name}>{person.name}</li>
          )}
      </ul>
    </div>
  )
}

export default App