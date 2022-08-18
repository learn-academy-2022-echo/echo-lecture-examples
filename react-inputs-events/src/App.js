import React, { useState } from 'react'

const App = () => {

  const [userInput, setUserInput] = useState("")

  const handleChange = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <>
      <h1>Hey Echo! Good morning.</h1>
      <input type="text" value={userInput} onChange={handleChange} />
      <h2>{userInput}</h2> 
    </>
  )
}
export default App




// import React, { useState } from 'react'
// import './App.css'
// import FlashCard from './components/FlashCard'
// //____Import Section_______^


// //_________Logic Section____v
// const App = () => {
//   const [userInput, setUserInput] = useState("")
//   const [animals, setAnimals] = useState(["Cheetah", "Walrus", "Giraffe", "Panda", "Opossum", "Seal"])


//   const handleChange = (e) => {
//     // "e" for event is a developer short hand for letting other developers know we are dealing with a a DOM event
//     // console.log("handle change works!")
//     // DOM events are changes or interactions with the Document Object Model (the HTML, CSS, and JS being rendered in the browser)  
//     console.log(e);
//     console.log(e.target);
//     console.log(e.target.value);
//     setUserInput(e.target.value)
//   }

//   // const addAnimal = (input) => {
//   //   const newAnimal = input
//   //   // console.log(newAnimal);
//   //   setAnimals([newAnimal, ...animals])
//   // }

// //_________Display Section____v
//   return (
//   <>
//     <h1>Hey Echo! Good morning.</h1>
//     {/* input attribute type allows for different kinds of inputs */}
//       {/* <input type="text" />
//           <input type="radio" />
//           <input type="date" />
//           <input type="checkbox" />
//           <input type="password" /> 
//       */} 
//     {/* Input's second attribute, used for collecting information, is value */}
//       {/* <input type="text" value={userInput} /> */}

//     {/* Inputs third attribute is called onChange and it sends DOM events to whatever function is being called upon */}

//       <input type="text" value={userInput} onChange={handleChange}/>
//       {/* <button className="button" onClick={() => { addAnimal(userInput) }}> Get ya a new animal</button> */}

//       {/* <h2>{userInput}</h2> */}

//       {/* {animals.map((value) => {
//         return <FlashCard animal={value}  />
//       })} */}
//   </>
//   )
// }

// export default App

