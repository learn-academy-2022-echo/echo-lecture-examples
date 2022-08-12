# React State 8/11/2022

React file structure
- public - index.html
- src - App.js and App.css

Server
- yarn start
- control + c

React Components
- display information: data, numbers, string, boolean, objects, symbols, arrays, markup that displays innerHTML
- perform logic: behavior, function, method

React State
- State creates variables that belong to the React component
- State gives a variable that can be displayed and a method that will update that variable (logic)


```javascript
import React, { useState } from 'react'

const App = () => {

  // state variables: [display, logic]
  const [miles, setMiles] = useState(0)

  const addAMile = () => {
    setMiles(miles + 1)
  }

  return (
    <>
      <h1>Run Tracker App</h1>
      <p>Miles: {miles}</p>
      <button onClick={addAMile}>Add Mile</button>
    </>
  )
}

export default App
```

- Inline styling
  - pass style attribute in the opening html tag
  ```javascript
      <p style={{backgroundColor: "purple"}}>February</p>
  ```
  - the style attribute has a curly brace that encapsulate its key: value pairs for styling
  - an additional curly brace is needed for jsx
  - the key is in camelCase

- Using css file
  - class - use attribute `className` in the html opening tag and `.` with the custom name on the css file
  - id - use attribute `id` in the html opening tag and `#` with the custom name on the css file
  - import the css file
  ```javascript
    import './App.css'
  ```
