import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => (
    <h1>{course.name}</h1>
);

const Content = ({course}) => {
  const parts = [...course.parts]
  return(
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part}/>
      ))}
    </div>
  )};

const Part = ({part}) => {
  return(<p>{part.name} {part.exercises}</p>);
}

const Course = ({course}) => {
  return(
    <div>
      <Header course={course}/>
      <Content course={course}/>
    </div>
  )
}

/* const Total = (props) => {
  let total = 0;
  for(let i = 0 ; i<props.course.parts.length ; i++){
      total = total + props.course.parts[i].exercises;
  }
  return(
    <p>Number of exercises {total}</p>
  )}; */



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
      }
    ]
  }

  return <Course course={course} />
}
ReactDOM.render(<App />, document.getElementById('root'))