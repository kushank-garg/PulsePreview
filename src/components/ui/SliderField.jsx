function SliderField({ label, value, onChange, min, max, unit }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <label className="text-xs font-medium text-gray-500">{label}</label>
        <span className="text-xs text-gray-400">{value}{unit || ''}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="w-full accent-indigo-500"
      />
      <div className="flex justify-between text-xs text-gray-300 mt-0.5">
        <span>{min}{unit || ''}</span>
        <span>{max}{unit || ''}</span>
      </div>
    </div>
  )
}

export default SliderField