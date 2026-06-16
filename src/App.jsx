import { useCSAT } from './context/CSATContext'

function App() {
  const { state } = useCSAT()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-xl font-medium text-gray-500">CSAT Builder</h1>
        <p className="text-sm text-gray-400 mt-2">context working: {state.initTitle}</p>
      </div>
    </div>
  )
}

export default App