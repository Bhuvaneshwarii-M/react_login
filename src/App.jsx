import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './signup.jsx'
import Login from './Login.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  

  return (
    <BrowserRouter>
              <Routes>
                  <Route path='/signup' element={<Signup />}></Route>
                  <Route path='/login' element={<Login />}></Route>
              </Routes>
    </BrowserRouter>
  )
}

export default App
