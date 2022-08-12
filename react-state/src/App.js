import React, { useState } from 'react'
import MileTracker from './components/MileTracker'

const App = () => {

  return (
    <>
      <h1>Run Tracker App</h1>
      <p style={{color: "green"}}>January</p>
      <MileTracker />
      <p>February</p>
      <MileTracker />
      <p>March</p>
      <MileTracker />
    </>
  )
}

export default App
