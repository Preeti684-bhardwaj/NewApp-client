import './App.css';
import Navbar from './component/nav/Navbar';
import React, { useState } from 'react'
import News from './component/newdisplay/News'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './component/home/Home';
import Footer from './component/footer/Footer';
import Newsdetail from './component/newsdetail/Newsdatail';
import About from './component/nav/About'


const App = () => {

  const[mode,setMode]=useState('light')

  const toggleMode= ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      document.title='Daily News-Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.title='Daily News-Light Mode';
    }
  }

  return (
    
    <div>
      <BrowserRouter>
        <Navbar title="Daily News"mode={mode} toggleMode={toggleMode}/>
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>} />
          <Route path="/news/:category" element={<News mode={mode} />} />
          <Route path="/" element={<Home mode={mode}/>} />
          <Route exact path="/news/getnews/:id" element={<Newsdetail mode={mode}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
