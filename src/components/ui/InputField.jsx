function InputField({ label, value, onChange, placeholder }) {
  return (
    <div className="mb-4">
      <label className="block text-xs font-medium text-gray-500 mb-1">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder || ''}
        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-indigo-400"
      />
    </div>
  )
}

export default InputField