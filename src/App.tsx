import React from 'react'
import './styles/globals.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Layout } from 'features'

import ROUTES from 'shared/constants/routes'

import { NotFound } from 'pages'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {ROUTES.map(r => {
            if (r.items)
              return r.items.map(r => (
                <Route
                  key={r.href}
                  path={r.href}
                  element={r.element ?? <NotFound />}
                />
              ))
            return (
              <Route
                key={r.href}
                path={r.href}
                element={r.element ?? <NotFound />}
              />
            )
          })}
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
