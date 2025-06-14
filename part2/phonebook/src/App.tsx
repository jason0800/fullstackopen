import { useState, useEffect } from 'react'
import personService from './services/phonebook.tsx'

import Header from './components/Header.tsx'
import PersonForm from './components/PersonForm.tsx'
import Filter from './components/Filter.tsx'
import Person from './components/Person.tsx'

const App = () => {
  const [persons, setPersons] = useState([])

  // inputs
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    console.log("effect");
    personService
      .getAll()
      .then(returnedPersons => {
        setPersons(returnedPersons)
      })
  }, [])
  console.log("Persons:", persons);

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
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const handleDeletePerson = (id) => {
    console.log("person to be deleted")
    personService.remove(id)
    setPersons(persons.filter(person => person.id != id))
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

  const personsToShow = search === '' ? persons : filteredPersons

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
      {personsToShow.map(person => (
        <Person
          key={person.id}
          person={person}
          deletePerson={()=>handleDeletePerson(person.id)}
        />
      ))}
    </div>
  )
}

export default App
