import { useEffect } from 'react'
import Card from './components/Card'

function App() {
  useEffect(() => {
    console.log('App: Component mounted')
  }, [])

  console.log('App: Rendering')
  try {
    return <Card />
  } catch (error) {
    console.error('App: Error rendering Card:', error)
    return <div>Error loading application</div>
  }
}

export default App
