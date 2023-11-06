import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Links from './components/main_nav/links'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Star Wars App',
  description: 'Created by Andre McMorris',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Links />
        </header>
          <main>
            {children}
          </main>
          <footer>
            
          </footer>
      </body>
    </html>
  )
}
