function MobilePreview() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-100 p-8">
      <p className="text-xs text-gray-400 mb-4 uppercase tracking-widest">Live Preview</p>

      {/* phone frame */}
      <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-xl"
        style={{ width: 280, height: 560 }}>

        {/* screen */}
        <div className="bg-gray-100 rounded-[2.5rem] h-full w-full overflow-hidden flex flex-col">

          {/* status bar */}
          <div className="bg-gray-900 flex justify-between items-center px-6 py-2 flex-shrink-0">
            <span className="text-white text-xs">9:41</span>
            <span className="text-white text-xs">●●●</span>
          </div>

          {/* app bg */}
          <div className="flex-1 bg-gray-200 relative flex items-end justify-center">
            <p className="absolute top-4 left-4 text-xs text-gray-400">App content</p>

            {/* popup placeholder */}
            <div className="w-full bg-white rounded-t-3xl p-5 shadow-lg">
              <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-4" />
              <p className="text-gray-400 text-xs text-center">preview loads here</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default MobilePreview