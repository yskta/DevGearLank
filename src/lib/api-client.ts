// src/lib/api-client.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

if (!API_BASE_URL) {
  throw new Error('API_BASE_URL is not defined')
}

export const apiClient = {
  async health() {
    try {
      const res = await fetch(`${API_BASE_URL}/health`)
      return await res.json()
    } catch (error) {
      console.error('Health check failed:', error)
      throw error
    }
  }
}