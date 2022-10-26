import React from 'react';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import Sidebar from './Sidebar';
import Overlay from './Overlay';
import Overlay2 from './Overlay2';
import Search from './Search';
import Searchbar from './Searchbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import '../styles/App.css';

function App() {

  //sidebar handling
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const navSidebarClickChange = () => {
    setSidebarIsOpen(true);
  }

  const sidebarClickChange = () => {
    setSidebarIsOpen(false);
  }

  const closeSidebarHandler = () => {
    setSidebarIsOpen(false);
  }

  //searchbar handling
  const [searchbarIsOpen, setSearchbarIsOpen] = useState(false);

  const navSearchbarClickChange = () => {
    setSearchbarIsOpen(true);
  }

  const searchbarClickChange = () => {
    setSearchbarIsOpen(false);
  }

  const closeSearchbarHandler = () => {
    setSearchbarIsOpen(false);
  }

  return (
    <BrowserRouter>
      <Sidebar clickHandler={sidebarClickChange} closeHandler={closeSidebarHandler} isOpen={sidebarIsOpen}/>
      <Searchbar clickHandler={searchbarClickChange} closeHandler={closeSearchbarHandler} isOpen={searchbarIsOpen}/>
      <Overlay sidebarOpen={sidebarIsOpen}/>
      <Overlay2 searchbarOpen={searchbarIsOpen}/>
      <Nav sidebarClickHandler={navSidebarClickChange} searchbarClickHandler={navSearchbarClickChange}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
