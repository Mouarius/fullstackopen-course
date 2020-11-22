import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Stats = ({numbers}) => {
  const [numberGood, numberNeutral, numberBad] = numbers
  return(
    <div>
      <h1>Statistics</h1>
      <p>good : {numberGood}</p>
        <p>neutral : {numberNeutral}</p>
        <p>bad : {numberBad}</p>
    </div>
  )
}

const Button = ({clickHandler, text}) => (
  <button onClick={clickHandler}>{text}</button>
)

const App = () => {
  const [numberGood, setNumberGood] = useState(0);
  const [numberNeutral, setNumberNeutral] = useState(0);
  const [numberBad, setNumberBad] = useState(0);

  const addGood = () => (setNumberGood(numberGood + 1))
  const addNeutral = () => (setNumberNeutral(numberNeutral + 1))
  const addBad = () => (setNumberBad(numberBad + 1))


  return(
    <div>
      <h1>give feedback</h1>
      <Button clickHandler={addGood} text={"good"}/>
      <Button clickHandler={addNeutral} text={"neutral"}/>
      <Button clickHandler={addBad} text={"bad"}/>

      <Stats numbers = {[numberGood, numberNeutral, numberBad]}/>
    </div>
  )

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);