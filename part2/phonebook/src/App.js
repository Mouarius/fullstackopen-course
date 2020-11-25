import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    {
        name: 'Arto Hellas',
        phone: '0612345678'
    }
  ]) 
  console.log(persons);
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')


  const handleNameChange = (event) => {
    console.log('Current input value : ', event.target.value);
    setNewName(event.target.value)
  }
  const handlePhoneChange = (event) => {
    console.log('Current phone value : ->' , event.target.value)
    setNewPhone(event.target.value)
  }

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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <ul>
            <li>
                <label for="name">Name :</label>
                <input onChange={handleNameChange} type='text' id='name' value={newName}/>
            </li>
            <li>
                <label for="phone">Phone :</label>
                <input onChange={handlePhoneChange} type='phone' id='phone' value={newPhone}/>
            </li>
        </ul>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <table>
          <tbody>
            {persons.map(person => 
            <tr key={person.name}>
                <td>{person.name}</td>
                <td>{person.phone}</td>
            </tr>
            )}
          </tbody>
          
      </table>
    </div>
  )
}

export default App