import { useCSAT } from '../../context/CSATContext'

// this took a bit to get right - the add/delete/edit for options
function OptionsList() {
  const { state, dispatch } = useCSAT()

  return (
    <div className="mb-4">
      <label className="block text-xs font-medium text-gray-500 mb-2">
        Quick-pick options
      </label>

      {state.options.map((opt, i) => (
        <div key={i} className="flex items-center gap-2 mb-2">
          <input
            type="text"
            value={opt}
            onChange={e => dispatch({
              type: 'UPDATE_OPTION',
              index: i,
              value: e.target.value
            })}
            className="flex-1 border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-gray-700 focus:outline-none focus:border-indigo-400"
          />
          <button
            onClick={() => dispatch({ type: 'DELETE_OPTION', index: i })}
            className="text-gray-300 hover:text-red-400 text-lg leading-none"
          >
            ×
          </button>
        </div>
      ))}

      <button
  onClick={() => dispatch({ type: 'ADD_OPTION' })}
  className="w-full border border-dashed border-gray-300 rounded-lg py-2 text-xs text-indigo-500 hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-200 active:scale-95 mt-1"
>
  + Add option
</button>
    </div>
  )
}

export default OptionsList