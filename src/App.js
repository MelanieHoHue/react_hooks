import React from 'react'
import ReactDom from 'react-dom'

let values = []
let currrentHook = 0 

function useState (initialState) {
  if (typeof values[currrentHook] === 'undefined') values[currrentHook] = initialState
  
  let hookIndex = currrentHook

  function setState (nextValue) {
    values[hookIndex] = nextValue
    ReactDom.render(<MyName />, document.getElementById('root'))
  }
  return [ values[currrentHook++], setState ]
}

function MyName () {
  currrentHook = 0
  const [ name, setName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  
  function handleChange (evt) {
    setName(evt.target.value)
  }

  function handleChangeLastName (evt) {
    setLastName(evt.target.value)
  }

  return <div>
    <h1>My name is: {name} {lastName}</h1>
    <input type="text" value={name} onChange={handleChange} />
    <input type="text" value={lastName} onChange={handleChangeLastName} />
  </div>
}

export default MyName

