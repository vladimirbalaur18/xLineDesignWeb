import React from 'react'
import NotFound from '../client/src/pages/not-found'
import Header from '../client/src/components/Header'
import Footer from '../client/src/components/Footer'
import ClientOnly from './components/ClientOnly'
import CustomCursor from '../client/src/components/CustomCursor'

export default function NotFoundPage() {
  return (
    <main>
      <ClientOnly>
        <CustomCursor />
      </ClientOnly>
      <Header />
      <NotFound />
      <Footer />
    </main>
  )
}