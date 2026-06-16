function Toggle({ label, checked, onChange }) {
  return (
    <div className="flex items-center justify-between py-2 mb-2">
      <span className="text-sm text-gray-600">{label}</span>
      <button
        onClick={() => onChange(!checked)}
        className={`relative w-10 h-5 rounded-full transition-colors ${
          checked ? 'bg-indigo-500' : 'bg-gray-300'
        }`}
      >
        <span className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${
          checked ? 'translate-x-5' : 'translate-x-0'
        }`} />
      </button>
    </div>
  )
}

export default Toggle