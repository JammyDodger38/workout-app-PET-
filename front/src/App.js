import React from 'react'
import Home from './components/pages/Home/Home'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import NewWorkout from './components/pages/NewWorkout/NewWorkout'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/new-workout" element={<NewWorkout />} exact />
      </Routes>
    </Router>
  )
}

export default App
