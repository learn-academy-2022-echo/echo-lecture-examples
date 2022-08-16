import React from 'react'

// nested components need a parameter of props
const FlashCard = (props) => {

  return (
    <div onClick={props.hulk}>This is a FlashCard
      <h2 >{props.animals[props.index]}</h2>
    </div>

  )
}

export default FlashCard