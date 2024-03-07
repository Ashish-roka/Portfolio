import './App.css'
import { useState } from 'react'
import{Routes,Route } from 'react-router-dom'

import Home from './container/home'
import Contact from './container/contact'
import Portfolio from './container/portfolio'
import Skills from './container/skills'
import Resume from './container/resume'
import About from './container/about'
import Navbar from './components/navBar'






function App() {
 return(
    <div className="App">


      
        {/* navbar */}


        <Navbar/>

    
        <Routes>
            <Route index  path='/' element={<Home/>}/>
            <Route  path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
            <Route path='/resume' element={<Resume/>}/>
            <Route path='/skills' element={<Skills/>}/>
        </Routes>
        </div>
    
    
 )
}

export default App
