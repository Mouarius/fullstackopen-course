import React, { useState } from 'react'

const App = () => {
  //------    COMPONENT STATES    ------//
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ filterValue, setFilterValue ] = useState('')

  //------    PERSONS FILTERING PROCESS    ------//
  
  const personsToShow = [] //Create an empty array to contain the objects of persons to show, we need to declare it empty at each new state render to ensure that we only show the current filtervalue

  for(let i = 0 ; i < persons.length ; i++){

    //LOG DEVELOPPEMENT TESTS
    /* console.log(`persons[${i}] :>> `, persons[i].name.toLowerCase());
    console.log('includes a >>', persons[i].name.toLowerCase().includes('a')); */

    if (persons[i].name.toLowerCase().includes(filterValue.toLowerCase())){ //Compares the values of lower case name property of deach person in persons, with the actual filter value (lower case as well)
      personsToShow.push(persons[i])//If there is a match, we push the person to the persons to show array
      console.log('Render the person :', persons[i].name);
    }
  }
  //const personsToShow = personsLowerCase.filter(person => person.name.includes(filterValue.toLowerCase()))
  console.log('Persons to show -> ', personsToShow)


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
      Filter by name : <input onChange={handleFilterChange} type="text"/>
      <form onSubmit={addPerson}>
        <ul>
            <li>
                <label htmlFor="name">Name :</label>
                <input onChange={handleNameChange} type='text' id='name' value={newName}/>
            </li>
            <li>
                <label htmlFor="phone">Phone :</label>
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
            {personsToShow.map(person => 
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