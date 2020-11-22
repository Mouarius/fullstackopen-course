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

  const [numberAverage, setNumberAverage] = useState(0);
  const [numberPositive, setNumberPositive] = useState(0);

  const all = numberBad + numberNeutral + numberGood;
  
  //A method to calculate the average of the rates given in input, be careful, the current state variable when we calculate is the previous one, we will need to add also 1 on the state for the update
  const calculateAverage = (good,neutral,bad) => { 
    if (good + neutral + bad !== 0){
      return ((good - bad)/(good+bad+neutral))
    }
    return 0
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

      <Stats numbers = {[numberGood, numberNeutral, numberBad]}/>
      <p>all : {all}</p>
      <p>average : {numberAverage}</p>
      <p>positive : {numberPositive} %</p>
    </div>
  )

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);