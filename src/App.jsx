import { useState } from 'react'
import Layout from './components/Layout'
import TabBar from './components/TabBar'
import MobilePreview from './components/preview/MobilePreview'

function App() {
  const [activeTab, setActiveTab] = useState('Content')

  return (
    <Layout>
      {/* left panel */}
      <div className="w-96 flex flex-col bg-white border-r border-gray-200 flex-shrink-0">
        <TabBar activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="flex-1 overflow-y-auto p-4">
          {activeTab === 'Content' && (
            <p className="text-sm text-gray-400">Content tab — coming next</p>
          )}
          {activeTab === 'Styling' && (
            <p className="text-sm text-gray-400">Styling tab — coming soon</p>
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