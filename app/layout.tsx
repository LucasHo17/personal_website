import './globals.css'
import { ReactNode } from 'react'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Lucas',
  description: 'Personal website and portfolio',
  icons: {
    icon: '/solar_system.png',
    shortcut: '/solar_system.png',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  )
}