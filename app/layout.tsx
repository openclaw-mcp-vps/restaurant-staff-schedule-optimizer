import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ShiftSmart — Restaurant Staff Schedule Optimizer',
  description: 'Optimize restaurant staffing based on sales forecasts. Connect POS data, predict busy periods, and auto-generate optimal staff schedules.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="621642f3-534a-475a-a8fe-713d6b39d56c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
