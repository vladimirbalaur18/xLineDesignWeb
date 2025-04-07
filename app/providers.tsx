'use client'

import React, { useState } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../client/src/lib/queryClient'

export function Providers({ children }: { children: React.ReactNode }) {
  // This component ensures that React Query is only initialized on the client
  const [client] = useState(() => queryClient)

  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  )
}