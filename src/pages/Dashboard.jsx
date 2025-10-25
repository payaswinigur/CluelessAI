import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { useAuth } from '../auth/AuthProvider'

export default function Dashboard() {
  const { user, getCollections, addCollection } = useAuth()
  const [collections, setCollections] = useState([])

  useEffect(() => {
    setCollections(getCollections())
  }, [user])

  const create = () => {
    const title = prompt('New collection title')
    if (!title) return
    const col = addCollection(title)
    setCollections((s) => [col, ...s])
  }

  return (
    <section className="py-6">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Your Collections</h2>
          <div>
            <button onClick={create} className="bg-primary text-slate-900 px-3 py-1 rounded">New</button>
          </div>
        </div>

        {collections.length === 0 ? (
          <div className="text-slate-400">No collections yet — create one.</div>
        ) : (
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {collections.map((c) => (
              <Card key={c.id} title={c.title} subtitle={new Date(c.createdAt).toLocaleString()} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
