import React, {useState} from 'react'

const MileTracker = () => {
  // state variables: [display, logic]
  const [miles, setMiles] = useState(0)

  const addAMile = () => {
    setMiles(miles + 1)
  }

  return (
    <>
      <p>Miles: {miles}</p>
      <button onClick={addAMile}>Add Mile</button>
    </>
  )
}

export default MileTracker
