import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { WagmiProvider } from 'wagmi'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { KitProvider } from '@0xsequence/kit'
import { projectAccessKey, config } from './config'
import { ThemeProvider } from '@0xsequence/design-system'
import '@0xsequence/design-system/styles.css'

const queryClient = new QueryClient() 
 
function Dapp() {
  return (
    <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}> 
          <KitProvider config={{projectAccessKey: projectAccessKey}}>
              <App />
          </KitProvider>
        </QueryClientProvider>
    </WagmiProvider>
  );
}
 
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Dapp />
  </React.StrictMode>,
)
