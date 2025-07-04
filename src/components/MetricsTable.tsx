
// "use client"

// import { useMetricsByCategory, type MetricData } from "../hooks/useDashboardData"

// interface MetricsTableProps {
//   category: string
// }

// const getPerformanceColor = (trend: string): string => {
//   // Handle cases where trend might be undefined or not a valid number
//   if (!trend || typeof trend !== "string") {
//     return "bg-gray-100 text-gray-800"
//   }

//   const percentage = Number.parseFloat(trend.replace("%", ""))

//   // Handle NaN case
//   if (isNaN(percentage)) {
//     return "bg-gray-100 text-gray-800"
//   }

//   if (percentage >= 80) return "bg-green-100 text-green-800"
//   if (percentage >= 70) return "bg-yellow-100 text-yellow-800"
//   return "bg-red-100 text-red-800"
// }

// export function MetricsTable({ category }: MetricsTableProps) {
//   const { metrics, loading, error } = useMetricsByCategory(category)

//   if (loading) {
//     return (
//       <div className="bg-white rounded-lg shadow-sm border border-gray-200">
//         <div className="px-6 py-4 border-b border-gray-200">
//           <div className="h-6 bg-gray-200 rounded w-1/3 animate-pulse"></div>
//         </div>
//         <div className="p-6">
//           <div className="space-y-4">
//             {[1, 2, 3, 4, 5].map((i) => (
//               <div key={i} className="flex justify-between animate-pulse">
//                 <div className="h-4 bg-gray-200 rounded w-2/3"></div>
//                 <div className="h-4 bg-gray-200 rounded w-16"></div>
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
//           <p>Error loading metrics</p>
//           <p className="text-sm">{error}</p>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="bg-white rounded-lg shadow-sm border border-gray-200">
//       <div className="px-6 py-4 border-b border-gray-200">
//         <h3 className="text-lg font-semibold text-gray-900">{category} Metrics</h3>
//         <p className="text-sm text-gray-600 mt-1">Performance tracking for {category.toLowerCase()} related metrics</p>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="w-full">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Category
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Metrics to track
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Current
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Ideal - Daily
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Performance
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {metrics.map((item: MetricData, index: number) => (
//               <tr key={index} className="hover:bg-gray-50">
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{index === 0 ? category : ""}</td>
//                 <td className="px-6 py-4 text-sm text-gray-900">{item.metric}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.current}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.ideal}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm">
//                   <span
//                     className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getPerformanceColor(item.trend)}`}
//                   >
//                     {item.trend}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }

"use client"

import { useMetricsByCategory, type MetricData } from "../hooks/useDashboardData"

interface MetricsTableProps {
  category: string
}

const getPerformanceColor = (trend: string): string => {
  if (!trend || typeof trend !== "string") {
    return "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
  }

  const percentage = Number.parseFloat(trend.replace("%", ""))

  if (isNaN(percentage)) {
    return "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
  }

  if (percentage >= 80) return "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400"
  if (percentage >= 70) return "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400"
  return "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400"
}

export function MetricsTable({ category }: MetricsTableProps) {
  const { metrics, loading, error } = useMetricsByCategory(category)

  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3 animate-pulse"></div>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex justify-between animate-pulse">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-300">
        <div className="text-center text-red-600 dark:text-red-400">
          <p>Error loading metrics</p>
          <p className="text-sm">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{category} Metrics</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Performance tracking for {category.toLowerCase()} related metrics
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-700/50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Metrics to track
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Current
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Ideal - Daily
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Performance
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {metrics.map((item: MetricData, index: number) => (
              <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  {index === 0 ? category : ""}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{item.metric}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                  {item.current}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{item.ideal}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getPerformanceColor(item.trend)}`}
                  >
                    {item.trend}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
