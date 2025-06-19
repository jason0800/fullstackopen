const Person = ({person, onClick}) => {
  // console.log(onClick);

  return (
    <div>
      <span>{person.name}: {person.number}</span>
      <button onClick={onClick}>Delete</button>
    </div>
  )
}

export default Person
