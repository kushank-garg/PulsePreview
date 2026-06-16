import { useState } from 'react'
import { useCSAT } from '../../context/CSATContext'
import InitialScreen from './InitialScreen'
import FeedbackScreen from './FeedbackScreen'
import ThankYouScreen from './ThankYouScreen'

const screens = ['Initial', 'Feedback', 'Thank You']

function MobilePreview() {
  const [activeScreen, setActiveScreen] = useState('Initial')
  const { state } = useCSAT()

  function renderScreen() {
    if (activeScreen === 'Initial') return <InitialScreen />
    if (activeScreen === 'Feedback') return <FeedbackScreen />
    return <ThankYouScreen />
  }

  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-100 p-8">
      <p className="text-xs text-gray-400 mb-3 uppercase tracking-widest">
        Live Preview
      </p>

      {/* screen switcher tabs */}
      <div className="flex gap-1 mb-4 bg-white rounded-lg p-1 border border-gray-200">
        {screens.map(s => (
          <button
            key={s}
            onClick={() => setActiveScreen(s)}
            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
              activeScreen === s
                ? 'bg-indigo-500 text-white'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* phone frame */}
      <div
        className="relative bg-gray-900 rounded-[3rem] p-3 shadow-xl"
        style={{ width: 280, height: 560 }}
      >
        {/* screen */}
        <div className="bg-gray-100 rounded-[2.5rem] h-full w-full overflow-hidden flex flex-col">

          {/* status bar */}
          <div className="bg-gray-900 flex justify-between items-center px-6 py-2 flex-shrink-0">
            <span className="text-white text-xs">9:41</span>
            <span className="text-white text-xs">●●●</span>
          </div>

          {/* app background with popup */}
          <div className="flex-1 bg-gray-200 relative flex items-end">
            <p className="absolute top-3 left-3 text-xs text-gray-400">
              App content
            </p>

            {/* dark overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30" />

            {/* popup sheet */}
            <div className="relative w-full rounded-t-3xl overflow-hidden shadow-lg">
              {renderScreen()}
            </div>
          </div>

        </div>
      </div>

      <p className="text-xs text-gray-400 mt-3">
        Changes reflect instantly
      </p>
    </div>
  )
}

export default MobilePreview