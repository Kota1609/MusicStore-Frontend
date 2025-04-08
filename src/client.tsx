import { hydrateRoot } from 'react-dom/client'
import { StartClient } from '@tanstack/react-start'
import { createRouter } from './router'

const router = createRouter()

// Export the app component for SSR
const App = () => <StartClient router={router as any} />

// Default export for SSR
export default App

// Client-side hydration
if (typeof window !== 'undefined') {
  hydrateRoot(document, <App />)
}
