function Layout({ children }) {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* top bar */}
      <div className="h-14 bg-white border-b border-gray-200 flex items-center px-6 flex-shrink-0">
        <span className="font-semibold text-gray-800 text-lg">CSAT Campaign Builder</span>
        <span className="ml-3 text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full">
          AppVersal
        </span>
      </div>

      {/* main area */}
      <div className="flex flex-1 overflow-hidden">
        {children}
      </div>
    </div>
  )
}

export default Layout