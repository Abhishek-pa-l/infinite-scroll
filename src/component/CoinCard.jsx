import React from 'react'

const CoinCard = ({image,price,name}) => {
  return (
    <div className='coincard'>
        <img src={image} alt="" />
        <h3>{name} </h3>
        <h4>{price} </h4>
    </div>
  )
}

export default CoinCard