// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
// import {createSemicolonClassElement} from 'typescript'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  const [name, setName] = React.useState('')
  const [error, setError] = React.useState(false)

  const refValue = React.useRef('')

  function handlesubmit(e) {
    e.preventDefault()
    console.log(e)
    onSubmitUsername(
      `\n fn: ${e.target.elements.usernameInput.value} \n ref: ${refValue.current.value} \n stateHook: ${name}`,
    )
  }

  function onInputChange(e) {
    e.target.value = e.target.value.toLowerCase() // auto convert user input

    if (e.target.value !== e.target.value.toLowerCase()) {
      setError(true)
    } else {
      setName(e.target.value)
      setError(false)
    }
  }

  return (
    <form onSubmit={handlesubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          ref={refValue}
          type="text"
          onChange={onInputChange}
          value={name}
        />
      </div>
      {error ? (
        <div style={{color: 'red'}}>Should not contain a Capital Letters!!</div>
      ) : null}
      <button disabled={Boolean(error)} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
