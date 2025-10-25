const PREFIX = 'fitcast_'

interface User {
  email: string
  username?: string
}

interface Collection {
  id: string
  title: string
  createdAt: string
}

// Local storage helpers
function getItem<T>(key: string, defaultValue: T): T {
  try {
    const item = localStorage.getItem(PREFIX + key)
    return item ? JSON.parse(item) : defaultValue
  } catch {
    return defaultValue
  }
}

function setItem(key: string, value: any): void {
  localStorage.setItem(PREFIX + key, JSON.stringify(value))
}

// Data access functions
export function getCurrentUser(): User | null {
  return getItem<User | null>('user', null)
}

export function setCurrentUser(user: User | null): void {
  if (user) {
    setItem('user', user)
  } else {
    localStorage.removeItem(PREFIX + 'user')
  }
}

export function getUserCollections(email: string): Collection[] {
  return getItem<Collection[]>(`collections_${email}`, [])
}

export function addUserCollection(email: string, title: string): Collection {
  const collection = {
    id: Date.now().toString(),
    title,
    createdAt: new Date().toISOString()
  }
  
  const collections = getUserCollections(email)
  collections.unshift(collection)
  setItem(`collections_${email}`, collections)
  
  return collection
}

// User management
export function getUsers(): Record<string, User & { password: string }> {
  return getItem<Record<string, User & { password: string }>>('users', {})
}