import React from 'react'
import Header from './components/Header'

const App = (props) => {


  return (
    <>
      <Header {...props}/>
      <h1>This is the Devise App</h1>
      <h2>
        Hello {props.current_user? props.current_user.email : "World"}
      </h2>
    </>
  )
}

export default App
