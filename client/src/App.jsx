import {BrowserRouter,Routes,Route} from 'react-router-dom';
import React from 'react'
import Home from './pages/Home';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import CreateListing from './pages/CreateListing';

export default function App() {
  return (
    <>
   
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/sign-in' element={<Signin/>}></Route>
        <Route path='/sign-up' element={<SignUp/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-listing' element={<CreateListing />} />
        </Route>

      </Routes>
    </BrowserRouter>
    </>
    
  )
}

