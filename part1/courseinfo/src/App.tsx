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

const Header = ({name}) => (
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

const App = () => {
    const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'JavaScript Basics',
        exercises: 10,
        id: 4
      }
    ]
  }
  return <Course course={course} />
}

export default App
