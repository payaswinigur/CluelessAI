import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthProvider'

export default function Auth() {
  const [mode, setMode] = useState('signin') // or 'signup'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [error, setError] = useState(null)
  const auth = useAuth()
  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    setError(null)
    try {
      if (mode === 'signin') {
        await auth.signIn({ email, password })
      } else {
        await auth.signUp({ email, password, username })
      }
      navigate('/dashboard')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <section className="min-h-[60vh] flex items-center">
      <div className="max-w-md mx-auto w-full bg-surface p-6 rounded-lg">
        <div className="flex gap-2 mb-4">
          <button onClick={() => setMode('signin')} className={`flex-1 py-2 rounded ${mode==='signin' ? 'bg-primary text-slate-900' : 'bg-transparent text-slate-300'}`}>Sign in</button>
          <button onClick={() => setMode('signup')} className={`flex-1 py-2 rounded ${mode==='signup' ? 'bg-primary text-slate-900' : 'bg-transparent text-slate-300'}`}>Sign up</button>
        </div>
        {error && <div className="text-red-400 mb-2">{error}</div>}
        <form onSubmit={submit}>
          {mode === 'signup' && (
            <label className="block mb-3">
              <div className="text-sm text-slate-300 mb-1">Display name</div>
              <input value={username} onChange={(e)=>setUsername(e.target.value)} className="w-full p-2 rounded bg-transparent border border-slate-700 text-white" placeholder="Your name" />
            </label>
          )}
          <label className="block mb-3">
            <div className="text-sm text-slate-300 mb-1">Email</div>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="w-full p-2 rounded bg-transparent border border-slate-700 text-white" placeholder="you@example.com" />
          </label>
          <label className="block mb-4">
            <div className="text-sm text-slate-300 mb-1">Password</div>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="w-full p-2 rounded bg-transparent border border-slate-700 text-white" placeholder="••••••" />
          </label>
          <div className="flex justify-end">
            <button type="submit" className="bg-primary text-slate-900 px-4 py-2 rounded">{mode === 'signin' ? 'Sign in' : 'Create account'}</button>
          </div>
        </form>
      </div>
    </section>
  )
}
