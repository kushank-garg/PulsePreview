import { useEffect } from 'react'
import { useCSAT } from '../context/CSATContext'

function Layout({ children }) {
  const { state, dispatch } = useCSAT()

  useEffect(() => {
    if (state.darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [state.darkMode])

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="h-14 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex items-center px-6 flex-shrink-0 gap-3 transition-colors duration-300">
        <span className="font-semibold text-gray-800 dark:text-gray-100">CSAT Campaign Builder</span>
        <span className="text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 px-2 py-0.5 rounded-full">AppVersal</span>

        <button
          onClick={() => dispatch({ type: 'UPDATE_FIELD', field: 'darkMode', value: !state.darkMode })}
          className="ml-auto flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 active:scale-95"
        >
          {state.darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
      <div className="flex flex-1 overflow-hidden">
        {children}
      </div>
    </div>
  )
}

export default Layout