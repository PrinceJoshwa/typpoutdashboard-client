// // // "use client"

// // // import { useState } from "react"
// // // import { MetricsCard } from "./components/MetricsCard"
// // // import { CategoryTabs } from "./components/CategoryTabs"
// // // import { DailyActiveUsersChart } from "./components/DailyActiveUsersChart"
// // // import { PostActivityChart } from "./components/PostActivityChart"
// // // import { MetricsTable } from "./components/MetricsTable"
// // // import { TrendingUp, MessageSquare, Search, DollarSign } from "lucide-react"

// // // function App() {
// // //   const [activeCategory, setActiveCategory] = useState("Engagement")

// // //   const topMetrics = [
// // //     {
// // //       title: "Daily Active Users",
// // //       value: "2,847",
// // //       change: "+12.5% vs last month",
// // //       icon: TrendingUp,
// // //       trend: "up",
// // //     },
// // //     {
// // //       title: "Campaign Reply Rate",
// // //       value: "18.3%",
// // //       change: "+2.1% average across campaigns",
// // //       icon: MessageSquare,
// // //       trend: "up",
// // //     },
// // //     {
// // //       title: "ICP Searches",
// // //       value: "1,234",
// // //       change: "-5.2% this month",
// // //       icon: Search,
// // //       trend: "down",
// // //     },
// // //     {
// // //       title: "Monthly Revenue",
// // //       value: "$45,231",
// // //       change: "+8.7% recurring revenue",
// // //       icon: DollarSign,
// // //       trend: "up",
// // //     },
// // //   ]

// // //   return (
// // //     <div className="min-h-screen bg-gray-50">
// // //       <div className="max-w-7xl mx-auto p-6">
// // //         <h1 className="text-3xl font-bold text-gray-900 mb-8">Analytics Dashboard</h1>

// // //         {/* Top Metrics Cards */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
// // //           {topMetrics.map((metric, index) => (
// // //             <MetricsCard key={index} {...metric} />
// // //           ))}
// // //         </div>

// // //         {/* Category Tabs */}
// // //         <CategoryTabs activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

// // //         {/* Charts Section */}
// // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
// // //           <DailyActiveUsersChart />
// // //           <PostActivityChart />
// // //         </div>

// // //         {/* Metrics Table */}
// // //         <MetricsTable category={activeCategory} />
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default App

// "use client"

// import { useState } from "react"
// import { MetricsCard } from "./components/MetricsCard"
// import { CategoryTabs } from "./components/CategoryTabs"
// import { DailyActiveUsersChart } from "./components/DailyActiveUsersChart"
// import { PostActivityChart } from "./components/PostActivityChart"
// import { MetricsTable } from "./components/MetricsTable"
// import { useDashboardData } from "./hooks/useDashboardData"
// import { TrendingUp, MessageSquare, Search, DollarSign } from "lucide-react"

// function App() {
//   const [activeCategory, setActiveCategory] = useState("Engagement")
//   const { dashboardStats, loading, error } = useDashboardData()

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         <div className="max-w-7xl mx-auto p-6">
//           <div className="h-8 bg-gray-200 rounded w-1/3 mb-8 animate-pulse"></div>

//           {/* Loading skeleton for metrics cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//             {[1, 2, 3, 4].map((i) => (
//               <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 animate-pulse">
//                 <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
//                 <div className="h-8 bg-gray-200 rounded w-1/2 mb-2"></div>
//                 <div className="h-3 bg-gray-200 rounded w-3/4"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     )
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-2xl font-bold text-red-600 mb-4">Error Loading Dashboard</h1>
//           <p className="text-gray-600">{error}</p>
//           <button
//             onClick={() => window.location.reload()}
//             className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           >
//             Retry
//           </button>
//         </div>
//       </div>
//     )
//   }

//   const topMetrics = dashboardStats
//     ? [
//         {
//           title: "Daily Active Users",
//           value: dashboardStats.dailyActiveUsers.value.toLocaleString(),
//           change: dashboardStats.dailyActiveUsers.change,
//           icon: TrendingUp,
//           trend: dashboardStats.dailyActiveUsers.trend,
//         },
//         {
//           title: "Campaign Reply Rate",
//           value: dashboardStats.campaignReplyRate.value,
//           change: dashboardStats.campaignReplyRate.change,
//           icon: MessageSquare,
//           trend: dashboardStats.campaignReplyRate.trend,
//         },
//         {
//           title: "ICP Searches",
//           value: dashboardStats.icpSearches.value.toLocaleString(),
//           change: dashboardStats.icpSearches.change,
//           icon: Search,
//           trend: dashboardStats.icpSearches.trend,
//         },
//         {
//           title: "Monthly Revenue",
//           value: dashboardStats.monthlyRevenue.value,
//           change: dashboardStats.monthlyRevenue.change,
//           icon: DollarSign,
//           trend: dashboardStats.monthlyRevenue.trend,
//         },
//       ]
//     : []

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto p-6">
//         <h1 className="text-3xl font-bold text-gray-900 mb-8">Analytics Dashboard</h1>

//         {/* Top Metrics Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           {topMetrics.map((metric, index) => (
//             <MetricsCard key={index} {...metric} />
//           ))}
//         </div>

//         {/* Category Tabs */}
//         <CategoryTabs activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

//         {/* Charts Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//           <DailyActiveUsersChart />
//           <PostActivityChart />
//         </div>

//         {/* Metrics Table */}
//         <MetricsTable category={activeCategory} />
//       </div>
//     </div>
//   )
// }

// export default App

"use client"

import { useState } from "react"
import { MetricsCard } from "./components/MetricsCard"
import { CategoryTabs } from "./components/CategoryTabs"
import { DailyActiveUsersChart } from "./components/DailyActiveUsersChart"
import { PostActivityChart } from "./components/PostActivityChart"
import { MetricsTable } from "./components/MetricsTable"
import { CircularThemeToggle } from "./components/circularthemetoggle"
import { ThemeProvider } from "./context/themecontext"
import { useDashboardData } from "./hooks/useDashboardData"
import { TrendingUp, MessageSquare, Search, DollarSign } from "lucide-react"

// import { MetricsCard } from "./components/MetricsCard"
// import { CategoryTabs } from "./components/CategoryTabs"
// import { DailyActiveUsersChart } from "./components/DailyActiveUsersChart"
// import { PostActivityChart } from "./components/PostActivityChart"
// import { MetricsTable } from "./components/MetricsTable"
// import { useDashboardData } from "./hooks/useDashboardData"
// import { TrendingUp, MessageSquare, Search, DollarSign } from "lucide-react"


function DashboardContent() {
  const [activeCategory, setActiveCategory] = useState("Engagement")
  const { dashboardStats, loading, error } = useDashboardData()

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto p-6">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-8 animate-pulse"></div>

          {/* Loading skeleton for metrics cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 animate-pulse"
              >
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-4"></div>
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-2"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center transition-colors duration-300">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">Error Loading Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  const topMetrics = dashboardStats
    ? [
        {
          title: "Daily Active Users",
          value: dashboardStats.dailyActiveUsers.value.toLocaleString(),
          change: dashboardStats.dailyActiveUsers.change,
          icon: TrendingUp,
          trend: dashboardStats.dailyActiveUsers.trend,
        },
        {
          title: "Campaign Reply Rate",
          value: dashboardStats.campaignReplyRate.value,
          change: dashboardStats.campaignReplyRate.change,
          icon: MessageSquare,
          trend: dashboardStats.campaignReplyRate.trend,
        },
        {
          title: "ICP Searches",
          value: dashboardStats.icpSearches.value.toLocaleString(),
          change: dashboardStats.icpSearches.change,
          icon: Search,
          trend: dashboardStats.icpSearches.trend,
        },
        {
          title: "Monthly Revenue",
          value: dashboardStats.monthlyRevenue.value,
          change: dashboardStats.monthlyRevenue.change,
          icon: DollarSign,
          trend: dashboardStats.monthlyRevenue.trend,
        },
      ]
    : []

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header with theme toggle */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Analytics Dashboard</h1>
          <CircularThemeToggle />
        </div>

        {/* Top Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {topMetrics.map((metric, index) => (
            <MetricsCard key={index} {...metric} />
          ))}
        </div>

        {/* Category Tabs */}
        <CategoryTabs activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <DailyActiveUsersChart />
          <PostActivityChart />
        </div>

        {/* Metrics Table */}
        <MetricsTable category={activeCategory} />
      </div>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <DashboardContent />
    </ThemeProvider>
  )
}

export default App
