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

        setDashboardStats(statsData)
        setChartData(chartsData)
        setCategories(categoriesData)
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
        setMetrics(data)
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
