import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"

import SignUpForm from "./auth/SignUpForm"
import SignInForm from "./auth/SignInForm"
import Home from "./Pages/Home"
import Dashboard from "./Pages/Dashboard"
import NewsArticles from "./Pages/NewsArticles"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/sign-up" element={<SignUpForm />} />

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashbord" element={<Dashboard />} />
        <Route path="/news" element={<NewsArticles />} />
       
      </Routes>
    </BrowserRouter>
  )
}

export default App
