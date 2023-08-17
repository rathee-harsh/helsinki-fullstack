const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}

const Content = (props) => {
  // console.log(one)
  return <>
    <Part part={props.p1} exercises={props.e1} />
    <Part part={props.p2} exercises={props.e2} />
    <Part part={props.p3} exercises={props.e3} />
  </>
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.num_exercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content p1={part1} p2={part2} p3={part3} e1={exercises1} e2={exercises2} e3={exercises3} />
      <Total num_exercises={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App