import { Analytics } from '@vercel/analytics/next'
import { Fredoka, Nunito_Sans } from 'next/font/google'
import type { Metadata, Viewport } from 'next'

const nunito = Nunito_Sans({ subsets: ['latin'], variable: '--font-nunito', display: 'swap' })
const fredoka = Fredoka({ subsets: ['latin'], variable: '--font-fredoka', display: 'swap' })
import './globals.css'

export const metadata: Metadata = {
  title: "Vel's Kids Play School | Villupuram",
  description: 'A happy beginning for a brighter tomorrow. Discover caring, play-based preschool programs at Vel’s Kids Play School in Villupuram.',
  generator: 'Next.js',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${fredoka.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
