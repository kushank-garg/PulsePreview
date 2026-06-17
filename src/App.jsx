import { useState } from 'react'
import Layout from './components/Layout'
import TabBar from './components/TabBar'
import MobilePreview from './components/preview/MobilePreview'
import InitialFeedback from './components/content/InitialFeedback'
import FeedbackPage from './components/content/FeedbackPage'
import ThankYouPage from './components/content/ThankYouPage'
import StylingPanel from './components/styling/StylingPanel'

function App() {
  const [activeTab, setActiveTab] = useState('Content')

  return (
    <Layout>
      <div className="
w-96
flex
flex-col
bg-white/70
dark:bg-gray-900/70
backdrop-blur-xl
border-r
border-white/30
dark:border-gray-700
flex-shrink-0
transition-colors
duration-300
shadow-[0_8px_40px_rgba(0,0,0,0.06)]
">
        <TabBar activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="flex-1 overflow-y-auto p-4">
          {activeTab === 'Content' && (
            <div>
              <InitialFeedback />
              <FeedbackPage />
              <ThankYouPage />
            </div>
          )}
          {activeTab === 'Styling' && (
            <StylingPanel />
          )}
        </div>
      </div>

      <div className="flex-1">
        <MobilePreview />
      </div>
    </Layout>
  )
}

export default App