import React from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter,Link, Route, Routes } from 'react-router-dom';
import Contactus from './components/Contactus';
import Navbar from './components/Navbar';
import EventHandling from './components/EventHandling';
import Notfound from './components/Notfound';
import StateManagement from './components/StateManagement';
import Listpost from './components/Listpost';
import Todolist from './components/Todolist';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div>
      <Toaster position='top-center'/>
      
      
      
      <BrowserRouter>
      <Navbar/>
      {/* <Link to ="/">Home page</Link>
      <Link to ="/Login">Login Page</Link>
      <Link to ="/Signup">Sign up</Link>
      <Link to ="/Contactus">Contact Us</Link> */}
      

          <Routes>


          
          <Route path='/' element={ <Home/> } />
          <Route path='/Login' element={ <Login/> } />
          <Route path='/Signup' element={ <Signup/> } />
          <Route path='/Contactus' element={ <Contactus/> } />
          <Route path='/EventHandling' element={ <EventHandling/> } />
          <Route path='/State' element={ <StateManagement/> } />
          <Route path='/listpost' element={ <Listpost/> } />
          <Route path='/Todolist' element={ <Todolist/> } />
          <Route path='*' element={ <Notfound/> } />


          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App