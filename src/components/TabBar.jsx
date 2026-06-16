function TabBar({ activeTab, onTabChange }) {
  const tabs = ['Content', 'Styling']

  return (
    <div className="flex border-b border-gray-200 bg-gray-50">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`flex-1 py-3 text-sm font-medium transition-colors ${
            activeTab === tab
              ? 'text-indigo-600 border-b-2 border-indigo-600 bg-white'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}

export default TabBar