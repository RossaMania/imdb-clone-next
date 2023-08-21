import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "IMDb Clone",
  description: "This is a IMDb Clone website.",
}

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          {/* Header */}
          <Header />

          {/* Navbar */}

          {/* Search */}
          {children}
        </body>
      </html>
    </Providers>
  );
}
