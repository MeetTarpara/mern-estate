import {BrowserRouter,Routes,Route} from 'react-router-dom';
import React from 'react'
import Home from './pages/Home';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';

export default function App() {
  return (5y m,kuu
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/sign-in' element={<Signin/>}></Route>
        <Route path='/sign-up' element={<SignUp/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/about' element={<About/>}></Route>

      </Routes>
    </BrowserRouter>
    </>
    
  )
}

5