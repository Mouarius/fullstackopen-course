import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Statistics = ({numbers}) => {
  const [numberGood, numberNeutral, numberBad] = numbers

  //COMPUTED VALUES
  const all = numberBad + numberNeutral + numberGood;

  var average = 0
  if (all !== 0){
    average = (numberGood - numberBad)/all
  }

  var positive = 0
  if (all !== 0){
    positive = (numberGood)/all*100
  }

  return(
    <div>
      <h1>Statistics</h1>
      <p>good : {numberGood}</p>
      <p>neutral : {numberNeutral}</p>
      <p>bad : {numberBad}</p>
      <p>all : {all}</p>
      <p>average : {average}</p>
      <p>positive : {positive} %</p>
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

  
  //Note : the computed statistic values don't have to be states, they are direcly calculated at each re-render, we don't have to create a new complex state just to re render it.

  const addGood = () => {
    setNumberGood(numberGood + 1)
  }
  const addNeutral = () => {
    setNumberNeutral(numberNeutral + 1)
  }
  const addBad = () => {
    setNumberBad(numberBad + 1)
  }

  const calculatePositive = (good, neutral, bad) => {
    if (good + neutral + bad !== 0){
      return(good/(good+neutral+bad)*100)
    }
    return 0
  }

  const addGood = () => {
    setNumberGood(numberGood + 1)
    setNumberAverage(calculateAverage(numberGood +1, numberNeutral, numberBad)) // We need to add 1 to numberGood because on calling setNumberGood(numberGood+1) the re-render is only cued and so when we call setNumberAverage, the numberGood value hasn't been updated
    setNumberPositive(calculatePositive(numberGood+1, numberNeutral, numberBad))
  }
  const addNeutral = () => {
    setNumberNeutral(numberNeutral + 1)
    setNumberAverage(calculateAverage(numberGood, numberNeutral+1, numberBad))
    setNumberPositive(calculatePositive(numberGood, numberNeutral+1, numberBad))

  }
  const addBad = () => {
    setNumberBad(numberBad + 1)
    setNumberAverage(calculateAverage(numberGood, numberNeutral, numberBad+1))
    setNumberPositive(calculatePositive(numberGood, numberNeutral, numberBad+1))
  }

  return(
    <div>
      <h1>give feedback</h1>
      <Button clickHandler={addGood} text={"good"}/>
      <Button clickHandler={addNeutral} text={"neutral"}/>
      <Button clickHandler={addBad} text={"bad"}/>

      <Statistics numbers = {[numberGood, numberNeutral, numberBad]}/>
    </div>
  )

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);