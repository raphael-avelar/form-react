import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from '../../pages/form'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
