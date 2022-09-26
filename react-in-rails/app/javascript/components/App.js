import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navigation from "./components/Navigation"
import AboutUs from "./pages/AboutUs"
import Home from "./pages/Home"

const App = () => {
  return (
    <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/aboutus' element={<AboutUs />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
