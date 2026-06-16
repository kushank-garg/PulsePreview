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
      {/* left panel */}
      <div className="w-96 flex flex-col bg-white border-r border-gray-200 flex-shrink-0">
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

      {/* right panel */}
      <div className="flex-1">
        <MobilePreview />
      </div>
    </Layout>
  )
}

export default App