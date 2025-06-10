import { useState } from 'react'

import Header from './components/Header.tsx'
import PersonForm from './components/PersonForm.tsx'
import Filter from './components/Filter.tsx'
import Persons from './components/Persons.tsx'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto', number: '027123123' },
    { name: 'Bob', number: '123' },
    { name: 'Jason', number: '456' }
  ])

  // inputs
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber
    }

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} already exists in phonebook.`);
      setNewName('')
      setNewNumber('')
    } else if (persons.some(person => person.number === newNumber)) {
      alert(`${newNumber} already exists in phonebook.`)
      setNewName('')
      setNewNumber('')
    } else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const filteredPersons = persons.filter(person =>
      person.name.toLowerCase().includes(search.toLowerCase()) && search !== ''
  )

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const handleNameChange =(event) => {
    console.log(event.target.value);
    setNewName(event.target.value)
  }

  const handleNumberChange =(event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <Header text="Phonebook" />
      <Header text="Find Contact" />
      <Filter value={search} onChange={handleSearchChange} />
      <Header text="Add New Contact" />
      <PersonForm
        onSubmit={addPerson}
        nameValue={newName}
        numberValue={newNumber}
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange}
        />
      <Header text="Contacts" />
      <Persons
        search={search}
        persons={persons}
        filteredPersons={filteredPersons}
        />
    </div>
  )
}

export default App
