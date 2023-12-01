import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '@Pages/HomePage'
import RootLayout from '@Layouts/rootLayout'

const App = () => {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
        </Routes>
      </RootLayout>
    </BrowserRouter>
  )
}

export default App