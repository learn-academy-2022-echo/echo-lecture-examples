import React from 'react'

const GameDisplay = ( props ) => {
  return (
    <>
      {/* map over array the array of objects */}
      {props.event.map((value, index)=> {
        return(
          <ul key={index}>
            <li> 
              Game: { value.game }
              <p>
                <button onClick={() => props.gotSupplies(value, index)}>
                  Supplies verified: 
                  {value.supplies && <p> Yes, we have all the supplies </p>}
                </button> 
              </p>
            </li>
          </ul>
        )
      })}    
    </>
  )
}

export default GameDisplay
