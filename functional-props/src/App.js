import React, { useState } from 'react'
import GameDisplay from './components/GameDisplay'

const App = () => {
// create an array to maintain the list and useState to allow updates later
const [adultGames, setAdultGames] = useState([
  { game: "Corn hole", supplies: false },
  { game: "Horse shoes", supplies: false },
  { game: "Flip cup", supplies: false },
])

const [kidGames, setKidGames] = useState([
  { game: "Bounce castle", supplies: false },
  { game: "Waterball fight", supplies: false },
  { game: "Wrestling", supplies: false },
])

// declare a function that will be pass down the river and update the state of the supplies when we click the button
const gotSupplies = (selectedObj, id) => {
  console.log("Adult Games", adultGames[id])
  console.log("Kid Games", kidGames[id])
  console.log("Adult Array", adultGames)
  console.log("Kid Array", kidGames)
  if(adultGames[id] === selectedObj) {
    // reassign the value at the index to true
    adultGames[id].supplies = true
    // set the state to reflect the changes using a spread operator
    setAdultGames([...adultGames])
  } else {
    // reassign the value at the index to true
    kidGames[id].supplies = true
    // set the state to reflect the changes using a spread operator
    setKidGames([...kidGames])
  }
  console.log("Adult Games", adultGames[id])
  console.log("Kid Games", kidGames[id])
  console.log("Adult Array", adultGames)
  console.log("Kid Array", kidGames)  
}

  return (
    <>
      <h1>Echo Extravaganza</h1>
      <h2>Adult Activities</h2>
      <GameDisplay 
        event={adultGames}
        gotSupplies={gotSupplies}
      />

      <h2>Kid Activities</h2>
      <GameDisplay 
        event={kidGames}
        gotSupplies={gotSupplies}
      />
      
    </>
  )
}

export default App