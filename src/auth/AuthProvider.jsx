import React, { createContext, useContext, useEffect, useState } from 'react'
import * as api from '../lib/storage'

const AuthContext = createContext(null)

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.getCurrentUser()
      .then(user => setUser(user))
      .finally(() => setLoading(false))
  }, [])

  const signUp = async ({ email, password, username }) => {
    const users = loadUsers()
    if (users[email]) {
      throw new Error('User already exists')
    }
    users[email] = { email, password, username }
    localStorage.setItem('fitcast_users', JSON.stringify(users))
    const u = { email, username }
    setUser(u)
    persistCurrent(u)
    return u
  }

  const signIn = async ({ email, password }) => {
    const users = loadUsers()
    const found = users[email]
    if (!found || found.password !== password) {
      throw new Error('Invalid credentials')
    }
    const u = { email: found.email, username: found.username }
    setUser(u)
    persistCurrent(u)
    return u
  }

  const signOut = () => {
    setUser(null)
    persistCurrent(null)
  }

  const getCollections = () => {
    if (!user) return []
    try {
      return JSON.parse(localStorage.getItem(`fitcast_collections_${user.email}`) || '[]')
    } catch (e) {
      return []
    }
  }

  const addCollection = (title) => {
    if (!user) throw new Error('Not authenticated')
    const key = `fitcast_collections_${user.email}`
    const col = { id: Date.now().toString(), title, createdAt: new Date().toISOString() }
    const list = getCollections()
    list.unshift(col)
    localStorage.setItem(key, JSON.stringify(list))
    return col
  }

  const value = {
    user,
    signUp,
    signIn,
    signOut,
    getCollections,
    addCollection
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
