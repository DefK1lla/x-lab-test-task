import React from 'react'
import './styles/globals.scss'
import { BrowserRouter } from 'react-router-dom'
import { Header } from 'features'

function App() {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
}

export default App
