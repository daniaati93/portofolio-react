import React from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import Works from './pages/Works'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Layout>
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="works" element={<Works />}/>
        <Route  path="/blog" element={<Blog />}/>
        <Route  path="/contact" element={<Contact />}/>
        <Route  path="/dashboard" element={<Dashboard />}/>
      </Routes>
    </Layout>
  )
}

export default App;