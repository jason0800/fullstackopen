const Part = ({part}) => {
  console.log(part);
  return <p>{part.name} {part.exercises}</p>
}

const Content = ({parts}) => {
  // console.log(parts);
  return (
    <div>
      {parts.map(part => <Part key={part.id} part={part}/>)}
    </div>
  )
}

const Header = ({name}) => (
  <h2>{name}</h2>
)

const Course = ({course}) => {
  // console.log(course);
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
        exercises: 20,
        id: 4
      }
    ]
  }
  return <Course course={course} />
}

export default App
