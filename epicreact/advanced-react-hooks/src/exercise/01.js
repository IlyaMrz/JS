// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function countReducer(state, step) {
  const newState = {count: state.count + step}
  return newState
}

function Counter({initialCount = 0, step = 3}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)

  const [countState, setCountState] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = countState
  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  const increment = () => setCountState(step)
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
