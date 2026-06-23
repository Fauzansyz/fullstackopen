function Part({ name, exercises }) {
  return (
    <p> {name} {exercises}</p>
  )
}

function Header({ course }) {
  return (
    <h1>{course}</h1>
  )
}

function Content({ part1, part2, part3}) {
  return (
    <div>
      <Part part={part1.name} exercises={exercises1.exercises}/>
      <Part part={part2.name} exercises={exercises2.exercises}/>
      <Part part={part3.name} exercises={exercises3.exercises} />
    </div>
  )
}

function Total({ total }) {
  return (
    <p>Number of exercises {total}</p>
  )
}

function App() {
  const course = 'Half Stack application development'

  const part1 = {
    name:'Fundamentals of React',
    exercises: 10
  }

  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }

  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <>
      <div>
        <Header course={course} />
        <Content part1={part1} part2={part2} part3={part3}/>
        <Total total={part1.exercises + part2.exercises + part3.exercises} />
      </div>
    </>
  )
}

export default App
