import NavBarMobile from '@/components/NavBarMobile'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Let\'s Gooo',
  description: 'Keep the party going!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}><NavBarMobile />{children}</body>
    </html>
  )
}
