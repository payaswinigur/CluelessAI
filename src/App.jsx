import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'

//Landing page ask to sign up, connect to authProvider
//if not signed in or no account, as to sign in or sign up
//after signing up it should take you to the dashboard

import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Header from './components/Header'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  return (
    <div className="app-root">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
         <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
         <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
