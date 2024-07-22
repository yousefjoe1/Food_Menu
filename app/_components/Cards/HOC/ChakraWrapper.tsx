'use client'

import { ChakraProvider } from '@chakra-ui/react'

export function ChakraWrapper({ children }: { children: React.ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>
}