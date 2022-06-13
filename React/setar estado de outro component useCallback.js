// myContainer.js
import React, { useState } from 'react'
import MyChild from 'some/path/myChild'

function MyContainer() {
  const [name, setName] = useState('foo')

  return (
    <MyChild name={name} onNameChange={setName} />
  )
}

export default MyContainer

// myChild.js
import React, { useCallback } from 'react'

function MyChild({ name, onNameChange }) {

  const handleInputChange = useCallback(event => {
    onNameChange(event.target.value)
  }, [onNameChange])

  return (
    <div>
      <input type="text" onChange={handleInputChange} value={name} />
      <div>The name is: {name}</div>
    </div>
  )
}

export default MyChild