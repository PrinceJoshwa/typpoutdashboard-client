// "use client"

// import { useState, useEffect } from "react"
// import { apiService } from "../services/api"

// export interface DashboardStats {
//   dailyActiveUsers: {
//     value: number
//     change: string
//     trend: "up" | "down"
//   }
//   campaignReplyRate: {
//     value: string
//     change: string
//     trend: "up" | "down"
//   }
//   icpSearches: {
//     value: number
//     change: string
//     trend: "up" | "down"
//   }
//   monthlyRevenue: {
//     value: string
//     change: string
//     trend: "up" | "down"
//   }
// }

// export interface ChartData {
//   dailyActiveUsers: number[]
//   postActivity: {
//     label: string
//     value: number
//     color: string
//   }[]
// }

// export interface MetricData {
//   metric: string
//   current: string
//   ideal: string
//   trend: string
//   category: string
// }

// export const useDashboardData = () => {
//   const [dashboardStats, setDashboardStats] = useState<DashboardStats | null>(null)
//   const [chartData, setChartData] = useState<ChartData | null>(null)
//   const [categories, setCategories] = useState<string[]>([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState<string | null>(null)

//   useEffect(() => {
//     const fetchInitialData = async () => {
//       try {
//         setLoading(true)
//         setError(null)

//         const [statsData, chartsData, categoriesData] = await Promise.all([
//           apiService.getDashboardStats(),
//           apiService.getChartData(),
//           apiService.getCategories(),
//         ])

//         setDashboardStats(statsData)
//         setChartData(chartsData)
//         setCategories(categoriesData)
//       } catch (err) {
//         setError(err instanceof Error ? err.message : "Failed to fetch dashboard data")
//         console.error("Error fetching dashboard data:", err)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchInitialData()
//   }, [])

//   return {
//     dashboardStats,
//     chartData,
//     categories,
//     loading,
//     error,
//     refetch: () => {
//       setLoading(true)
//       setError(null)
//       // Re-fetch data
//     },
//   }
// }

// export const useMetricsByCategory = (category: string) => {
//   const [metrics, setMetrics] = useState<MetricData[]>([])
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState<string | null>(null)

//   useEffect(() => {
//     if (!category) return

//     const fetchMetrics = async () => {
//       try {
//         setLoading(true)
//         setError(null)
//         const data = await apiService.getMetricsByCategory(category)
//         setMetrics(data)
//       } catch (err) {
//         setError(err instanceof Error ? err.message : "Failed to fetch metrics")
//         console.error("Error fetching metrics:", err)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchMetrics()
//   }, [category])

//   return { metrics, loading, error }
// }


"use client"

import { useState, useEffect } from "react"
import { apiService } from "../services/api"

export interface DashboardStats {
  dailyActiveUsers: {
    value: number
    change: string
    trend: "up" | "down"
  }
  campaignReplyRate: {
    value: string
    change: string
    trend: "up" | "down"
  }
  icpSearches: {
    value: number
    change: string
    trend: "up" | "down"
  }
  monthlyRevenue: {
    value: string
    change: string
    trend: "up" | "down"
  }
}

export interface ChartData {
  dailyActiveUsers: number[]
  postActivity: {
    label: string
    value: number
    color: string
  }[]
}

export interface MetricData {
  metric: string
  current: string
  ideal: string
  trend: string
  category: string
}

// Type guards for API responses
const isDashboardStats = (data: unknown): data is DashboardStats => {
  return typeof data === "object" && data !== null && "dailyActiveUsers" in data
}

const isChartData = (data: unknown): data is ChartData => {
  return typeof data === "object" && data !== null && "dailyActiveUsers" in data && "postActivity" in data
}

const isStringArray = (data: unknown): data is string[] => {
  return Array.isArray(data) && data.every((item) => typeof item === "string")
}

const isMetricDataArray = (data: unknown): data is MetricData[] => {
  return (
    Array.isArray(data) &&
    data.every(
      (item) =>
        typeof item === "object" &&
        item !== null &&
        "metric" in item &&
        "current" in item &&
        "ideal" in item &&
        "trend" in item &&
        "category" in item,
    )
  )
}

export const useDashboardData = () => {
  const [dashboardStats, setDashboardStats] = useState<DashboardStats | null>(null)
  const [chartData, setChartData] = useState<ChartData | null>(null)
  const [categories, setCategories] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setLoading(true)
        setError(null)

        const [statsData, chartsData, categoriesData] = await Promise.all([
          apiService.getDashboardStats(),
          apiService.getChartData(),
          apiService.getCategories(),
        ])

        // Type assertions with validation
        if (isDashboardStats(statsData)) {
          setDashboardStats(statsData)
        } else {
          throw new Error("Invalid dashboard stats format")
        }

        if (isChartData(chartsData)) {
          setChartData(chartsData)
        } else {
          throw new Error("Invalid chart data format")
        }

        if (isStringArray(categoriesData)) {
          setCategories(categoriesData)
        } else {
          throw new Error("Invalid categories format")
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch dashboard data")
        console.error("Error fetching dashboard data:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchInitialData()
  }, [])

  return {
    dashboardStats,
    chartData,
    categories,
    loading,
    error,
    refetch: () => {
      setLoading(true)
      setError(null)
      // Re-fetch data
    },
  }
}

export const useMetricsByCategory = (category: string) => {
  const [metrics, setMetrics] = useState<MetricData[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!category) return

    const fetchMetrics = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await apiService.getMetricsByCategory(category)

        if (isMetricDataArray(data)) {
          setMetrics(data)
        } else {
          throw new Error("Invalid metrics data format")
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch metrics")
        console.error("Error fetching metrics:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchMetrics()
  }, [category])

  return { metrics, loading, error }
}
