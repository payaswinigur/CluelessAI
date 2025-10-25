const API_URL = import.meta.env.VITE_API_URL

// Types
interface User {
  email: string
  username?: string
}

interface Collection {
  id: string
  title: string
  createdAt: string
}

// API helpers
async function apiCall<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    }
  })

  if (!response.ok) {
    throw new Error(`API call failed: ${response.statusText}`)
  }

  return response.json()
}

// Authentication
export async function getCurrentUser(): Promise<User | null> {
  try {
    return await apiCall<User>('/auth/current')
  } catch {
    return null
  }
}

export async function signIn(credentials: { email: string; password: string }): Promise<User> {
  return apiCall<User>('/auth/signin', {
    method: 'POST',
    body: JSON.stringify(credentials)
  })
}

export async function signUp(userData: { email: string; password: string; username: string }): Promise<User> {
  return apiCall<User>('/auth/signup', {
    method: 'POST',
    body: JSON.stringify(userData)
  })
}

export async function signOut(): Promise<void> {
  await apiCall('/auth/signout', { method: 'POST' })
}

// Collections
export async function getUserCollections(): Promise<Collection[]> {
  return apiCall<Collection[]>('/collections')
}

export async function addUserCollection(title: string): Promise<Collection> {
  return apiCall<Collection>('/collections', {
    method: 'POST',
    body: JSON.stringify({ title })
  })
}
// User management
export async function getUsers(): Promise<Record<string, User & { password: string }>> {
  return apiCall<Record<string, User & { password: string }>>('/users')
}