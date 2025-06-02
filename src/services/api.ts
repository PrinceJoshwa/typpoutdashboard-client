const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api"

interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
}

class ApiService {
  private async request<T>(endpoint: string): Promise<T> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result: ApiResponse<T> = await response.json()

      if (!result.success) {
        throw new Error(result.message || "API request failed")
      }

      return result.data
    } catch (error) {
      console.error(`API request failed for ${endpoint}:`, error)
      throw error
    }
  }

  // Dashboard stats
  async getDashboardStats() {
    return this.request("/dashboard/stats")
  }

  // Chart data
  async getChartData() {
    return this.request("/dashboard/charts")
  }

  // Metrics by category
  async getMetricsByCategory(category: string) {
    return this.request(`/dashboard/metrics/${encodeURIComponent(category)}`)
  }

  // All metrics
  async getAllMetrics() {
    return this.request("/dashboard/metrics")
  }

  // Historical data
  async getHistoricalData(type?: string) {
    const endpoint = type ? `/dashboard/historical/${type}` : "/dashboard/historical"
    return this.request(endpoint)
  }

  // Available categories
  async getCategories() {
    return this.request("/dashboard/categories")
  }

  // Health check
  async healthCheck() {
    return this.request("/health")
  }
}

export const apiService = new ApiService()
export default apiService
