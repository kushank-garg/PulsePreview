import { useCSAT } from '../../context/CSATContext'
import InputField from '../ui/InputField'
import SectionLabel from '../ui/SectionLabel'

function ThankYouPage() {
  const { state, dispatch } = useCSAT()

  function update(field, value) {
    dispatch({ type: 'UPDATE_FIELD', field, value })
  }

  // handle image/lottie upload
  function handleMedia(e) {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = ev => update('tyMedia', ev.target.result)
    reader.readAsDataURL(file)
  }

  return (
    <div>
      <SectionLabel text="Thank You Page" />

      {/* media upload */}
      <div className="mb-4">
        <label className="block text-xs font-medium text-gray-500 mb-1">
          Upload media
        </label>
        <label className="block w-full border border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors">
          <span className="text-xs text-gray-400">
            {state.tyMedia ? '✓ Media uploaded' : 'PNG, JPG, GIF, Lottie'}
          </span>
          <input
            type="file"
            accept=".png,.jpg,.jpeg,.gif,.json"
            onChange={handleMedia}
            className="hidden"
          />
        </label>
        {state.tyMedia && !state.tyMedia.includes('application/json') && (
          <img
            src={state.tyMedia}
            alt="preview"
            className="mt-2 h-16 object-contain rounded mx-auto"
          />
        )}
      </div>

      <InputField
        label="Title"
        value={state.tyTitle}
        onChange={val => update('tyTitle', val)}
      />
      <InputField
        label="Subtitle"
        value={state.tySubtitle}
        onChange={val => update('tySubtitle', val)}
      />
      <InputField
        label="Button text"
        value={state.tyBtnText}
        onChange={val => update('tyBtnText', val)}
      />
    </div>
  )
}

export default ThankYouPage