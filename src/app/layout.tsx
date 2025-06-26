import '../../styles/globals.css'
import type { ReactNode } from 'react'
import { ThemeProvider } from '../../components/theme-provider'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300 lg:mx-40">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >{children}</ThemeProvider>
      </body>
    </html>
  )
}