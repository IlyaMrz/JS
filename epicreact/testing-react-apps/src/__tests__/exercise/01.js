// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../../components/counter'

beforeEach(() => {
  document.body.innerHTML = ''
})

test('counter increments and decrements when the buttons are clicked', () => {
  // 🐨 create a div to render your component to (💰 document.createElement)
  //
  // 🐨 append the div to document.body (💰 document.body.append)
  //
  const div = document.createElement('div')
  document.body.append(div)
  // 🐨 use ReactDOM.render to render the <Counter /> to the div
  ReactDOM.render(<Counter />, div)
  // 🐨 get a reference to the increment and decrement buttons:
  //   💰 div.querySelectorAll('button')
  const [decrement, increment] = div.querySelectorAll('button')
  // 🐨 get a reference to the message div:
  //   💰 div.firstChild.querySelector('div')
  const message = div.firstChild.querySelector('div')

  //
  // 🐨 expect the message.textContent toBe 'Current count: 0'
  // 🐨 click the increment button (💰 increment.click())
  // 🐨 assert the message.textContent
  // 🐨 click the decrement button (💰 decrement.click())
  // 🐨 assert the message.textContent
  //
  expect(message.textContent).toBe('Current count: 0')
  const incrementClickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0,
  })
  increment.dispatchEvent(incrementClickEvent)
  expect(message.textContent).toBe('Current count: 1')
  const decrementClickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0,
  })
  decrement.dispatchEvent(decrementClickEvent)
  expect(message.textContent).toBe('Current count: 0')
  // 🐨 cleanup by removing the div from the page (💰 div.remove())
  // div.remove()
  // 🦉 If you don't cleanup, then it could impact other tests and/or cause a memory leak
})

/* eslint no-unused-vars:0 */
