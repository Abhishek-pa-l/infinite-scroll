import React from 'react'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Coins from './component/Coins'
import Exchanges from './component/Exchanges'
import Header from './component/Header'

import './styles/coincard.css'
import './styles/header.css'
import './styles/coin.css'
import './styles/loader.css'
const App = () => {

  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Coins/>} />
          <Route path='/exchanges' element={<Exchanges/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App