import React from 'react'
// React funcitonal component
// We need ID, name, image and Type of pokemon props
const PokemonThumbnails = ([id, name, image, type]) => {
  // create a new variable to retreive type of pokemon (using a variable instead of a string)
  const style  = 'thumb-container'

  return (
    <div className= {style}>
        <div className='number'>
            <small>#0{id}</small>
        </div>
        <img src={image} alt={name} />
        <div className='detail-wrapper'>
            <h3>{name}</h3>
            <small> Type: {type}</small>
        </div>
    </div>
  )
}

export default PokemonThumbnails