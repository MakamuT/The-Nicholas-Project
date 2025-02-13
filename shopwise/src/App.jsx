import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Landingpage/home';
import Login from './Auth/login'; 
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />}/>
      </Routes>      
    </BrowserRouter>
  )
}

export default App
