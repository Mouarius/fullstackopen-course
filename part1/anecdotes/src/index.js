import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const numberAnecdotes = anecdotes.length

  const [points, setPoints] = useState(Array(numberAnecdotes).fill(0))
  console.log("points : ", points)

  var best = 0
  var max = 0
  for (let i =0; i< numberAnecdotes ; i++){
    if(max < points[i]){
      max = points[i]
      best = i
    }
  }

  const randomAnecdote = () => {
    const random = Math.floor(Math.random()*(numberAnecdotes))
    setSelected(random)
  }

  const addPoint = () => {
    let copy = [...points]
    copy[selected]+=1
    return(setPoints(copy))
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <button onClick={randomAnecdote}>next anectode</button>
      <button onClick={addPoint}>vote</button>

      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[best]}</p>


    </div>
  )
}


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)