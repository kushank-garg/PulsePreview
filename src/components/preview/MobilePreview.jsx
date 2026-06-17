import { useState } from 'react'
import { useCSAT } from '../../context/CSATContext'
import InitialScreen from './InitialScreen'
import FeedbackScreen from './FeedbackScreen'
import ThankYouScreen from './ThankYouScreen'

const screens = ['Initial', 'Feedback', 'Thank You']

function MobilePreview() {
  const [activeScreen, setActiveScreen] = useState('Initial')
  const { state, dispatch } = useCSAT()

  function renderScreen() {
    if (activeScreen === 'Initial') return <InitialScreen />
    if (activeScreen === 'Feedback') return <FeedbackScreen />
    return <ThankYouScreen />
  }

  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-100 dark:bg-gray-800 p-4 overflow-auto transition-colors duration-300">
      <div className="flex items-center gap-3 mb-3">
        <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest">Live Preview</p>
        <button
          onClick={() => dispatch({ type: 'UPDATE_FIELD', field: 'previewDarkMode', value: !state.previewDarkMode })}
          className="text-xs px-2 py-1 rounded-md border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 active:scale-95"
        >
          {state.previewDarkMode ? '☀️ App: Light' : '🌙 App: Dark'}
        </button>
      </div>

      <div className="flex gap-1 mb-4 bg-white dark:bg-gray-900 rounded-lg p-1 border border-gray-200 dark:border-gray-700">
        {screens.map(s => (
          <button
            key={s}
            onClick={() => setActiveScreen(s)}
            className={`px-3 py-1 rounded text-xs font-medium transition-all duration-200 active:scale-95 ${
              activeScreen === s ? 'bg-indigo-500 text-white' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-xl flex-shrink-0 animate-phone-in" style={{ width: 260, height: 520 }}>
        <div className="bg-gray-100 rounded-[2.5rem] h-full w-full overflow-hidden flex flex-col">
          <div className="bg-gray-900 flex justify-between items-center px-6 py-2 flex-shrink-0">
            <span className="text-white text-xs">9:41</span>
            <span className="text-white text-xs">●●●</span>
          </div>
          <div className="flex-1 relative flex items-end overflow-hidden">
            {state.previewDarkMode ? (
              <div className="absolute inset-0 bg-gray-900">
                <div className="absolute top-6 left-6 w-16 h-16 bg-indigo-900 rounded-full opacity-50" />
                <div className="absolute top-20 right-8 w-10 h-10 bg-purple-900 rounded-lg opacity-50" />
                <div className="absolute bottom-40 left-10 w-12 h-12 bg-blue-900 rounded-full opacity-40" />
                <p className="absolute top-3 left-3 text-xs text-gray-400 font-medium">App content</p>
              </div>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 via-pink-200 to-yellow-100">
                <div className="absolute top-6 left-6 w-16 h-16 bg-indigo-400 rounded-full opacity-60" />
                <div className="absolute top-20 right-8 w-10 h-10 bg-pink-400 rounded-lg opacity-60" />
                <div className="absolute bottom-40 left-10 w-12 h-12 bg-yellow-400 rounded-full opacity-50" />
                <p className="absolute top-3 left-3 text-xs text-gray-600 font-medium">App content</p>
              </div>
            )}
            <div className="absolute inset-0 bg-black bg-opacity-10" />
            <div
              key={activeScreen}
              className={`relative w-full rounded-t-3xl overflow-hidden shadow-lg transition-colors duration-300 animate-screen-in ${
                state.glassEffect ? 'backdrop-blur-md' : ''
              }`}
              style={
                state.glassEffect
                  ? { backgroundColor: `${state.bgColor}b3` }
                  : {}
              }
            >
              {renderScreen()}
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-400 dark:text-gray-500 mt-3">Changes reflect instantly</p>
    </div>
  )
}

export default MobilePreview