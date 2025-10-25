import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../auth/AuthProvider'

export default function Header() {
  const { user, signOut } = useAuth()

  return (
    <header className="py-4">
      <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-white">FitCast</Link>
        <nav className="flex items-center gap-4 text-sm text-slate-300">
          <Link to="/dashboard" className="hover:text-white">Dashboard</Link>
          <Link to="/profile" className="hover:text-white">Profile</Link>
          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-slate-200">{user.username || user.email}</span>
              <button onClick={signOut} className="bg-primary text-slate-900 px-3 py-1 rounded">Sign out</button>
            </div>
          ) : (
            <Link to="/auth" className="bg-primary text-slate-900 px-3 py-1 rounded">Sign</Link>
          )}
        </nav>
      </div>
    </header>
  )
}
