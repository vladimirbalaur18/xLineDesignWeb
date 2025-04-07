import React from 'react'
import Home from '../client/src/pages/Home'
import CustomCursor from '../client/src/components/CustomCursor'
import Header from '../client/src/components/Header'
import Footer from '../client/src/components/Footer'
import ClientOnly from './components/ClientOnly'

export default function HomePage() {
  return (
    <main>
      <ClientOnly>
        <CustomCursor />
      </ClientOnly>
      <Header />
      <Home />
      <Footer />
    </main>
  )
}