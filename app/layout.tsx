import type { Metadata } from 'next'
import React from 'react'
import '../client/src/index.css'
import { Toaster } from '../client/src/components/ui/toaster'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Architectural Showcase',
  description: 'Explore innovative architectural designs and projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}