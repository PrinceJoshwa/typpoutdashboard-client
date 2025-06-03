
// import type { LucideIcon } from "lucide-react"

// interface MetricsCardProps {
//   title: string
//   value: string
//   change: string
//   icon: LucideIcon
//   trend: "up" | "down"
//   loading?: boolean
// }

// export function MetricsCard({ title, value, change, icon: Icon, trend, loading }: MetricsCardProps) {
//   if (loading) {
//     return (
//       <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
//         <div className="flex items-center justify-between mb-4">
//           <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
//           <div className="h-5 w-5 bg-gray-200 rounded animate-pulse"></div>
//         </div>
//         <div className="space-y-2">
//           <div className="h-8 bg-gray-200 rounded animate-pulse w-20"></div>
//           <div className="h-4 bg-gray-200 rounded animate-pulse w-32"></div>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
//       <div className="flex items-center justify-between mb-4">
//         <h3 className="text-sm font-medium text-gray-600">{title}</h3>
//         <Icon className="h-5 w-5 text-gray-400" />
//       </div>
//       <div className="space-y-2">
//         <p className="text-2xl font-bold text-gray-900">{value}</p>
//         <p className={`text-sm ${trend === "up" ? "text-green-600" : "text-red-600"}`}>{change}</p>
//       </div>
//     </div>
//   )
// }

import type { LucideIcon } from "lucide-react"

interface MetricsCardProps {
  title: string
  value: string
  change: string
  icon: LucideIcon
  trend: "up" | "down"
  loading?: boolean
}

export function MetricsCard({ title, value, change, icon: Icon, trend, loading }: MetricsCardProps) {
  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-24"></div>
          <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
        </div>
        <div className="space-y-2">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-20"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-32"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-300 hover:shadow-md dark:hover:shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</h3>
        <Icon className="h-5 w-5 text-gray-400 dark:text-gray-500" />
      </div>
      <div className="space-y-2">
        <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
        <p
          className={`text-sm ${trend === "up" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
        >
          {change}
        </p>
      </div>
    </div>
  )
}
