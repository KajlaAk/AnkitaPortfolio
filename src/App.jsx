import React from 'react'
import './App.css'
import Slidebar from './Components/Slidbar/Slidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Aboutus from './Components/About/Aboutus'
import Resume from './Components/Resume/Resume'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'
import background from "./assets/background.jpg"

const App = () => {
  return (
    <BrowserRouter>
      <div className='cointainer-fluid' style={{height:"100vh"}}>
        <div className='row'>
        {/* Render the Sidebar component outside of Routes */}
        <div className='col-md-3'>
        <Slidebar />
        </div>
        
        <div className='col-md-9'style={{backgroundImage:`url(${background})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      </div>
      </div>
    </BrowserRouter>
  )
}

export default App
