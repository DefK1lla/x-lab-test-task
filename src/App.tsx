import React from 'react'
import './styles/globals.scss'
import { BrowserRouter } from 'react-router-dom'
import { Layout } from 'features'

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App
