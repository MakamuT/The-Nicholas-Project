import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Landingpage/Home';
import Login from './Auth/Login'; 
import Register from './Auth/register';
import Bot from './chatbot/bot';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/bot' element={<Bot/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
