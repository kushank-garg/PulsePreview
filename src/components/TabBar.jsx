function TabBar({ activeTab, onTabChange }) {
  const tabs = ['Content', 'Styling']

  return (
    <div className="
flex
m-3
p-1
rounded-2xl
bg-gray-100/80
dark:bg-gray-800
backdrop-blur-md
">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`flex-1 py-3 text-sm font-medium transition-colors duration-200 ${
            activeTab === tab
              ? 'text-indigo-600 dark:text-indigo-400 bg-white dark:bg-gray-900 rounded-xl shadow-md'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}

export default TabBar