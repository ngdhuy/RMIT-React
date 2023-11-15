import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.sass'

import { default as VisitorLayout }         from './pages/Visitor/_Layout'
import { default as Adminlayout }          from './pages/Admin/_Layout'

const App : React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<VisitorLayout/>}/>
        <Rout path='/admin' element={<AdminLayout/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
