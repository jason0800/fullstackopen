const Persons = ({search, persons, filteredPersons}) => (
  search === ''
  ? persons.map(person =><p key={person.name}>{person.name}: {person.number}</p>)
  : filteredPersons.map(person => <p key={person.name}>{person.name}: {person.number}</p>)
)

export default Persons
