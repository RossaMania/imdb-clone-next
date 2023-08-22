import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './Providers'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "IMDb Clone",
  description: "This is a IMDb Clone website.",
}

export default function RootLayout({ children }) {
  return (
    <html async="" lang="en">
      <body className={inter.className}>
        <Providers>
          {/* Header */}
          <Header />

          {/* Navbar */}
          <Navbar />

          {/* Search */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
