import { useCSAT } from '../../context/CSATContext'
import InputField from '../ui/InputField'
import Toggle from '../ui/Toggle'
import SectionLabel from '../ui/SectionLabel'
import OptionsList from './OptionsList'

function FeedbackPage() {
  const { state, dispatch } = useCSAT()

  function update(field, value) {
    dispatch({ type: 'UPDATE_FIELD', field, value })
  }

  return (
    <div>
      <SectionLabel text="Feedback Page" />

      {/* rating type toggle */}
      <div className="mb-4">
        <label className="block text-xs font-medium text-gray-500 mb-2">
          Rating type
        </label>
        <div className="flex gap-2">
          <button
            onClick={() => update('ratingType', 'stars')}
            className={`flex-1 py-2 rounded-lg text-sm border transition-colors ${
              state.ratingType === 'stars'
                ? 'bg-indigo-50 border-indigo-400 text-indigo-600 font-medium'
                : 'border-gray-200 text-gray-500 hover:bg-gray-50'
            }`}
          >
            ★ Stars
          </button>
          <button
            onClick={() => update('ratingType', 'numbers')}
            className={`flex-1 py-2 rounded-lg text-sm border transition-colors ${
              state.ratingType === 'numbers'
                ? 'bg-indigo-50 border-indigo-400 text-indigo-600 font-medium'
                : 'border-gray-200 text-gray-500 hover:bg-gray-50'
            }`}
          >
            1–5 Numbers
          </button>
        </div>
      </div>

      <OptionsList />

      <Toggle
        label="Show comment box"
        checked={state.showComment}
        onChange={val => update('showComment', val)}
      />

      <InputField
        label="Submit button text"
        value={state.submitText}
        onChange={val => update('submitText', val)}
      />
    </div>
  )
}

export default FeedbackPage