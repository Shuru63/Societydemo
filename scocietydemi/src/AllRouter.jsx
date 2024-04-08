import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage'
import Auth from './components/Authentication/Auth'
import Register from './components/Authentication/Register'
const AllRouter = () => {
  return (
    <div>
      <Router>
         <Routes>
         <Route path='/register' element={<Register />} />
         <Route path='/' element={<Auth />} />
         </Routes>
        
        <Routes>
          
          <Route path='/homepage' element={<Homepage />} />
        </Routes>
       
       
      </Router>
    </div>
  )
}

export default AllRouter
