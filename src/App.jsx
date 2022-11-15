import React from 'react'
import Header from './components/Header'
import Characters from './components/Characters'
import './components/Header.css'
import './main.sass'

function App() {

  return (
    <div className="App">

      <Header title='Rick and Morty' />
      <Characters />

    </div>
  )
}

export default App
