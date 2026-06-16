function ColorField({ label, value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block text-xs font-medium text-gray-500 mb-1">
        {label}
      </label>
      <div className="flex items-center gap-2">
        <input
          type="color"
          value={value}
          onChange={e => onChange(e.target.value)}
          className="w-8 h-8 rounded cursor-pointer border border-gray-200"
        />
        <span className="text-sm text-gray-500 font-mono">{value}</span>
      </div>
    </div>
  )
}

export default ColorField