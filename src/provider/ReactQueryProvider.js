'use client'

import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const ReactQueryProvider = ({ children }) => {
  const [client] = useState(new QueryClient())

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}

export default ReactQueryProvider
