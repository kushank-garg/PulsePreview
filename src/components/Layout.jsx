function Layout({ children }) {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="h-14 bg-white border-b border-gray-200 flex items-center px-6 flex-shrink-0 gap-3">
        <span className="font-semibold text-gray-800">CSAT Campaign Builder</span>
        <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full">AppVersal</span>
        <span className="ml-auto text-xs text-gray-400">No save needed — live updates</span>
      </div>
      <div className="flex flex-1 overflow-hidden">
        {children}
      </div>
    </div>
  )
}

export default Layout