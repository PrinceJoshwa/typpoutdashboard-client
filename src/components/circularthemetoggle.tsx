"use client"

import { Sun, Moon } from "lucide-react"
import { useTheme } from "../context/themecontext"

export function CircularThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {/* Background circle that slides */}
      <div className="absolute inset-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 dark:from-purple-500 dark:to-blue-400 transition-all duration-300" />

      {/* Icon container */}
      <div className="relative z-10 w-8 h-8 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center transition-all duration-300">
        {theme === "light" ? (
          <Sun className="w-4 h-4 text-yellow-500 transition-all duration-300 group-hover:rotate-90" />
        ) : (
          <Moon className="w-4 h-4 text-blue-400 transition-all duration-300 group-hover:-rotate-12" />
        )}
      </div>

      {/* Ripple effect on hover */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-500/20 scale-0 group-hover:scale-110 transition-transform duration-300" />
    </button>
  )
}
