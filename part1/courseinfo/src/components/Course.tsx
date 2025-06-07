interface HeaderProps {
  name: string;
}

const Part = ({part}) => {
  return <p>{part.name} {part.exercises}</p>
}

const Total = ({parts}) => {
  const total = parts.reduce(
    (acc, curr) => {
      return acc + curr.exercises
    }
  , 0)

  return <p>Total Number of Exercises: {total}</p>
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part => <Part key={part.id} part={part}/>)}
      <Total parts={parts}/>
    </div>
  )
}

const Header = ({name}: HeaderProps) => (
  <h2>{name}</h2>
)

const Course = ({course}) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts}/>
    </div>
  )
}

export default Course
