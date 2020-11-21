import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './assets/bootstrap/css/bootstrap.min.css'
import './assets/css/styles.css'


const Header = () => (<h1 className="display-3 text-center">Heading</h1>)
const Display = () => (
<div className="container text-center">
  <p>COMPTEUR</p>
</div>
)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  return (
    <div className="container text-center">
      <Header/>
      {left}
      <button className="btn btn-primary" onClick={() => setLeft(left + 1)}>
        left
      </button>
      <button className="btn btn-primary" onClick={() => setRight(right + 1)}>
        right
      </button>
      {right}
    </div>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)