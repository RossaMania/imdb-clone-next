import Header from '@/components/Header'
import './globals.css'
import Providers from './Providers'
import Navbar from '@/components/Navbar'
import Searchbox from '@/components/Searchbox'

export const metadata = {
  title: "IMDb Clone",
  description: "This is a IMDb Clone website.",
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Providers>
          {/* Header */}
          <Header />

          {/* Navbar */}
          <Navbar />

          {/* Search */}
          <Searchbox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
