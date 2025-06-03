// "use client"

// import { TrendingUp, MessageSquare, Search, Users, DollarSign, Target } from "lucide-react"

// interface CategoryTabsProps {
//   activeCategory: string
//   onCategoryChange: (category: string) => void
// }

// export function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
//   const categories = [
//     { name: "Engagement", icon: TrendingUp },
//     { name: "Outreach", icon: MessageSquare },
//     { name: "ICP Finder", icon: Search },
//     { name: "Onboarding", icon: Users },
//     { name: "Monetization", icon: DollarSign },
//     { name: "North Star Metrics", icon: Target },
//   ]

//   return (
//     <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
//       <div className="flex overflow-x-auto">
//         {categories.map((category) => {
//           const Icon = category.icon
//           return (
//             <button
//               key={category.name}
//               onClick={() => onCategoryChange(category.name)}
//               className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
//                 activeCategory === category.name
//                   ? "border-blue-500 text-blue-600 bg-blue-50"
//                   : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
//               }`}
//             >
//               <Icon className="h-4 w-4" />
//               <span>{category.name}</span>
//             </button>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

"use client"

import { TrendingUp, MessageSquare, Search, Users, DollarSign, Target } from "lucide-react"

interface CategoryTabsProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  const categories = [
    { name: "Engagement", icon: TrendingUp },
    { name: "Outreach", icon: MessageSquare },
    { name: "ICP Finder", icon: Search },
    { name: "Onboarding", icon: Users },
    { name: "Monetization", icon: DollarSign },
    { name: "North Star Metrics", icon: Target },
  ]

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 mb-8 transition-colors duration-300">
      <div className="flex overflow-x-auto">
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <button
              key={category.name}
              onClick={() => onCategoryChange(category.name)}
              className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-all duration-300 ${
                activeCategory === category.name
                  ? "border-blue-500 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                  : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{category.name}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
