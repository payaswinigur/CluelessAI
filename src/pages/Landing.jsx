import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <section className="min-h-[60vh] flex items-center">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-extrabold mb-4">Welcome to FitCast</h1>
        <p className="text-slate-300 mb-6">Mobile-first fitness experience inspired by your Figma design.</p>
        <div className="flex justify-center gap-4">
          <Link to="/auth" className="bg-primary text-slate-900 px-5 py-2 rounded-md">Get started</Link>
          <Link to="/dashboard" className="border border-slate-600 text-slate-200 px-5 py-2 rounded-md">Explore</Link>
        </div>
      </div>
    </section>
  )
}
