import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-8 py-6">
      <div className="max-w-4xl mx-auto px-4 text-center text-slate-400 text-sm">
        <small>© {new Date().getFullYear()} FitCast — Prototype</small>
      </div>
    </footer>
  )
}
