import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
        <Link to={'/'} >Coins</Link>
        <Link to={'/exchanges'} >Exchanges</Link>

    </div>
  )
}

export default Header