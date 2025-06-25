'use client'
import { useEffect, useState } from 'react'

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <div>
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-4 right-4 p-2 rounded bg-gray-300 dark:bg-gray-700 text-sm"
      >
        {isDark ? '🌙 Dark' : '☀️ Light'}
      </button>
      {children}
    </div>
  )
}