import React from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      
      
      <BrowserRouter>
          <Routes>

          <Route path='/' element={ <Home/> } />
          <Route path='/Login' element={ <Login/> } />
          <Route path='/Signup' element={ <Signup/> } />

          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App