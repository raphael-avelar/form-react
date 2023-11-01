import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from '../../pages/form'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
