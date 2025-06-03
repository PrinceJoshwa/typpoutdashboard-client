
// "use client"

// import { useEffect, useState } from "react"
// import { apiService } from "../services/api"

// interface ChartData {
//   dailyActiveUsers: number[]
//   postActivity: {
//     label: string
//     value: number
//     color: string
//   }[]
// }

// const isChartData = (data: unknown): data is ChartData => {
//   return (
//     typeof data === "object" &&
//     data !== null &&
//     "dailyActiveUsers" in data &&
//     Array.isArray((data as ChartData).dailyActiveUsers)
//   )
// }

// export function DailyActiveUsersChart() {
//   const [data, setData] = useState<number[]>([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState<string | null>(null)

//   const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

//   useEffect(() => {
//     const fetchChartData = async () => {
//       try {
//         setLoading(true)
//         const chartData = await apiService.getChartData()

//         if (isChartData(chartData)) {
//           setData(chartData.dailyActiveUsers)
//         } else {
//           throw new Error("Invalid chart data format")
//         }
//       } catch (err) {
//         setError(err instanceof Error ? err.message : "Failed to fetch chart data")
//         console.error("Error fetching chart data:", err)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchChartData()
//   }, [])

//   if (loading) {
//     return (
//       <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
//         <div className="animate-pulse">
//           <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
//           <div className="h-3 bg-gray-200 rounded w-1/2 mb-6"></div>
//           <div className="h-64 bg-gray-200 rounded"></div>
//         </div>
//       </div>
//     )
//   }

//   if (error) {
//     return (
//       <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
//         <div className="text-center text-red-600">
//           <p>Error loading chart data</p>
//           <p className="text-sm">{error}</p>
//         </div>
//       </div>
//     )
//   }

//   const maxValue = Math.max(...data)

//   return (
//     <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold text-gray-900">Daily Active Users</h3>
//         <p className="text-sm text-gray-600">User activity over the past week</p>
//       </div>

//       <div className="h-64 flex items-end justify-between space-x-2">
//         {data.map((value, index) => (
//           <div key={index} className="flex flex-col items-center flex-1">
//             <div
//               className="w-full bg-teal-500 rounded-t-sm transition-all duration-300 hover:bg-teal-600"
//               style={{ height: `${(value / maxValue) * 200}px` }}
//             />
//             <span className="text-xs text-gray-600 mt-2">{days[index]}</span>
//           </div>
//         ))}
//       </div>

//       <div className="mt-4 flex justify-between text-xs text-gray-500">
//         <span>800</span>
//         <span>1600</span>
//         <span>2400</span>
//         <span>3200</span>
//       </div>
//     </div>
//   )
// }

"use client"

import { useEffect, useState } from "react"
import { apiService } from "../services/api"

interface ChartData {
  dailyActiveUsers: number[]
  postActivity: {
    label: string
    value: number
    color: string
  }[]
}

const isChartData = (data: unknown): data is ChartData => {
  return (
    typeof data === "object" &&
    data !== null &&
    "dailyActiveUsers" in data &&
    Array.isArray((data as ChartData).dailyActiveUsers)
  )
}

export function DailyActiveUsersChart() {
  const [data, setData] = useState<number[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        setLoading(true)
        const chartData = await apiService.getChartData()

        if (isChartData(chartData)) {
          setData(chartData.dailyActiveUsers)
        } else {
          throw new Error("Invalid chart data format")
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch chart data")
        console.error("Error fetching chart data:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchChartData()
  }, [])

  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-300">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-2"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-6"></div>
          <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-300">
        <div className="text-center text-red-600 dark:text-red-400">
          <p>Error loading chart data</p>
          <p className="text-sm">{error}</p>
        </div>
      </div>
    )
  }

  const maxValue = Math.max(...data)

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-300">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Daily Active Users</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">User activity over the past week</p>
      </div>

      <div className="h-64 flex items-end justify-between space-x-2">
        {data.map((value, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <div
              className="w-full bg-teal-500 dark:bg-teal-400 rounded-t-sm transition-all duration-300 hover:bg-teal-600 dark:hover:bg-teal-300"
              style={{ height: `${(value / maxValue) * 200}px` }}
            />
            <span className="text-xs text-gray-600 dark:text-gray-400 mt-2">{days[index]}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-between text-xs text-gray-500 dark:text-gray-400">
        <span>800</span>
        <span>1600</span>
        <span>2400</span>
        <span>3200</span>
      </div>
    </div>
  )
}
