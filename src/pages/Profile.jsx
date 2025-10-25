import React from 'react'
import { useAuth } from '../auth/AuthProvider'

export default function Profile() {
  const { user, signOut, getCollections } = useAuth()
  const collections = user ? getCollections() : []

  if (!user) {
    return (
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-slate-300">You are not signed in. Please sign in to view your profile.</div>
      </section>
    )
  }

  return (
    <section className="py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-2">{user.username || user.email}</h2>
        <div className="mb-4 text-slate-400">Email: {user.email}</div>
        <button onClick={signOut} className="bg-red-600 text-white px-3 py-1 rounded">Sign out</button>

        <div className="mt-6">
          <h3 className="text-lg font-medium">Your collections</h3>
          {collections.length === 0 ? (
            <div className="text-slate-400">No collections yet.</div>
          ) : (
            <ul className="mt-2 list-disc list-inside text-slate-200">
              {collections.map((c) => (
                <li key={c.id}>{c.title} — {new Date(c.createdAt).toLocaleString()}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}
