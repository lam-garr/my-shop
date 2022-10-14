import React from 'react';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/shop' element={<Shop/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
