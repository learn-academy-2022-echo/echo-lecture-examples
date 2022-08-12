import React, { useState } from 'react'
import MileTracker from './components/MileTracker'
import './App.css'

const App = () => {

  return (
    <>
      <h1>Run Tracker App</h1>
      <p style={{color: "green"}}>January</p>
      <MileTracker />
      <p style={{backgroundColor: "purple"}}>February</p>
      <MileTracker />

      <p className="red">March</p>
      <MileTracker />
    </>
  )
}

export default App
