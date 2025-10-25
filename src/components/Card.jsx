import React from 'react'

export default function Card({ title, subtitle, children }) {
  return (
    <article className="bg-surface p-4 rounded-lg shadow-sm">
      <div>
        <h3 className="text-white text-lg font-semibold">{title}</h3>
        <p className="text-slate-400 text-sm">{subtitle}</p>
        {children}
      </div>
    </article>
  )
}
