
// "use client"

// import { useEffect, useState } from "react"
// import { apiService } from "../services/api"

// interface PostActivityData {
//   label: string
//   value: number
//   color: string
// }

// export function PostActivityChart() {
//   const [data, setData] = useState<PostActivityData[]>([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState<string | null>(null)

//   useEffect(() => {
//     const fetchChartData = async () => {
//       try {
//         setLoading(true)
//         const chartData = await apiService.getChartData()
//         setData(chartData.postActivity)
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
//           <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6"></div>
//           <div className="space-y-3">
//             {[1, 2, 3, 4].map((i) => (
//               <div key={i} className="flex justify-between">
//                 <div className="h-3 bg-gray-200 rounded w-1/3"></div>
//                 <div className="h-3 bg-gray-200 rounded w-16"></div>
//               </div>
//             ))}
//           </div>
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

//   const total = data.reduce((sum, item) => sum + item.value, 0)

//   return (
//     <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold text-gray-900">Post Activity</h3>
//         <p className="text-sm text-gray-600">Distribution of post actions</p>
//       </div>

//       <div className="flex items-center justify-center mb-6">
//         <div className="relative w-48 h-48">
//           <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
//             {data.map((item, index) => {
//               const percentage = (item.value / total) * 100
//               const strokeDasharray = `${percentage} ${100 - percentage}`
//               const strokeDashoffset = data.slice(0, index).reduce((sum, prev) => sum + (prev.value / total) * 100, 0)

//               return (
//                 <circle
//                   key={index}
//                   cx="50"
//                   cy="50"
//                   r="15.915"
//                   fill="transparent"
//                   stroke={item.color
//                     .replace("bg-", "#")
//                     .replace("purple-400", "9333ea")
//                     .replace("green-400", "4ade80")
//                     .replace("yellow-400", "facc15")
//                     .replace("red-400", "f87171")}
//                   strokeWidth="8"
//                   strokeDasharray={strokeDasharray}
//                   strokeDashoffset={-strokeDashoffset}
//                   className="transition-all duration-300"
//                 />
//               )
//             })}
//           </svg>
//         </div>
//       </div>

//       <div className="space-y-3">
//         {data.map((item, index) => (
//           <div key={index} className="flex items-center justify-between">
//             <div className="flex items-center space-x-3">
//               <div className={`w-3 h-3 rounded-full ${item.color}`} />
//               <span className="text-sm text-gray-700">{item.label}</span>
//             </div>
//             <span className="text-sm font-medium text-gray-900">{item.value.toLocaleString()}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

"use client"

import { useEffect, useState } from "react"
import { apiService } from "../services/api"

interface PostActivityData {
  label: string
  value: number
  color: string
}

interface ChartData {
  dailyActiveUsers: number[]
  postActivity: PostActivityData[]
}

const isChartData = (data: unknown): data is ChartData => {
  return (
    typeof data === "object" &&
    data !== null &&
    "postActivity" in data &&
    Array.isArray((data as ChartData).postActivity)
  )
}

export function PostActivityChart() {
  const [data, setData] = useState<PostActivityData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        setLoading(true)
        const chartData = await apiService.getChartData()

        if (isChartData(chartData)) {
          setData(chartData.postActivity)
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
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2 mb-6"></div>
          <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6"></div>
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex justify-between">
                <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                <div className="h-3 bg-gray-200 rounded w-16"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="text-center text-red-600">
          <p>Error loading chart data</p>
          <p className="text-sm">{error}</p>
        </div>
      </div>
    )
  }

  const total = data.reduce((sum, item) => sum + item.value, 0)

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Post Activity</h3>
        <p className="text-sm text-gray-600">Distribution of post actions</p>
      </div>

      <div className="flex items-center justify-center mb-6">
        <div className="relative w-48 h-48">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {data.map((item, index) => {
              const percentage = (item.value / total) * 100
              const strokeDasharray = `${percentage} ${100 - percentage}`
              const strokeDashoffset = data.slice(0, index).reduce((sum, prev) => sum + (prev.value / total) * 100, 0)

              return (
                <circle
                  key={index}
                  cx="50"
                  cy="50"
                  r="15.915"
                  fill="transparent"
                  stroke={item.color
                    .replace("bg-", "#")
                    .replace("purple-400", "9333ea")
                    .replace("green-400", "4ade80")
                    .replace("yellow-400", "facc15")
                    .replace("red-400", "f87171")}
                  strokeWidth="8"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={-strokeDashoffset}
                  className="transition-all duration-300"
                />
              )
            })}
          </svg>
        </div>
      </div>

      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${item.color}`} />
              <span className="text-sm text-gray-700">{item.label}</span>
            </div>
            <span className="text-sm font-medium text-gray-900">{item.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
