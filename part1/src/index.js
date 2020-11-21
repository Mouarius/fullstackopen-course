import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = ({counter}) => (<div>{counter}</div>)

const Button = ({handleClick, text}) => (<button onClick = {handleClick}> {text} </button>)



const App = () => {
  const [ counter, setCounter ] = useState(0)

  const incrementCounter = () => {
    return setCounter(counter + 1);
  }

  const decrementCounter = () => {
    return setCounter(counter - 1)
  }

  const resetCounter = () => {
    return setCounter(0)
  }

  return (
    <div>
      <Display counter={counter}/>
      <Button handleClick={decrementCounter} text="MOINS"/>
      <Button handleClick={resetCounter} text="RESET"/>
      <Button handleClick={incrementCounter} text="PLUS"/>
    </div>
  );
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)