import { Providers } from './providers'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AdSpin AI',
  description: 'Spin AI-powered ad creatives and automagically post them to TikTok & Instagram',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
