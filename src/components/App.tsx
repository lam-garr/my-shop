import React from 'react';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import Sidebar from './Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import '../styles/App.css';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const navClickChange = () => {
    setIsOpen(true);
  }

  const sbClickChange = () => {
    setIsOpen(false);
  }

  return (
    <BrowserRouter>
      <Sidebar clickHandler={sbClickChange} isOpen={isOpen}/>
      <Nav clickHandler={navClickChange}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/shop' element={<Shop/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
