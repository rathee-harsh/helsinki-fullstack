const Header = (props) => {
    return <h1>{props.course}</h1>
}

const Total = ({ parts }) => {
    return <p><b>total of {parts.reduce((s, next) => s + next.exercises, 0)} exercises</b></p>
}

const Part = (props) => {
    return (
        <p>
            {props.part} {props.exercises}
        </p>
    )
}

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map(part => <Part part={part.name} exercises={part.exercises} key={part.id} />)}
        </div>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course