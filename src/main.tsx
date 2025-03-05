import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import ErrorBoundary from './components/ErrorBoundary'

console.log('Main.tsx: Starting application mount')

const rootElement = document.getElementById('root')
console.log('Main.tsx: Root element found:', !!rootElement)

if (!rootElement) throw new Error('Failed to find the root element')

const root = createRoot(rootElement)
console.log('Main.tsx: Created React root')

try {
  console.log('Main.tsx: Attempting to render app')
  root.render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>,
  )
  console.log('Main.tsx: Render completed')
} catch (error) {
  console.error('Main.tsx: Error during render:', error)
}
