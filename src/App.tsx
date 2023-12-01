import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '@Pages/HomePage'
import RootLayout from '@Layouts/rootLayout'
import WordsTestPage from '@Pages/WordsTestPage'

const App = () => {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/words-test'element={<WordsTestPage />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  )
}

export default App