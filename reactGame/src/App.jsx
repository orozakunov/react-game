import React from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import Create from "./Pages/Create/Create"
import Home from "./Pages/Home/Home"
import Recipe from './Pages/Recipe/Recipe'
import Search from './Pages/Search/Search'
import NavBar from "./components/NavBar/NavBar.jsx"

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/recipe' element={<Recipe />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </div>
  )
}

export default App
