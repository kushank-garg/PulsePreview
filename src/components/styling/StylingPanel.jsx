import { useCSAT } from '../../context/CSATContext'
import ColorField from '../ui/ColorField'
import SliderField from '../ui/SliderField'
import SectionLabel from '../ui/SectionLabel'

function StylingPanel() {
  const { state, dispatch } = useCSAT()

  function update(field, value) {
    dispatch({ type: 'UPDATE_FIELD', field, value })
  }

  return (
    <div>
      <SectionLabel text="Colors" />

      <ColorField
        label="Background color"
        value={state.bgColor}
        onChange={val => update('bgColor', val)}
      />
      <ColorField
        label="Title color"
        value={state.titleColor}
        onChange={val => update('titleColor', val)}
      />
      <ColorField
        label="Subtitle color"
        value={state.subtitleColor}
        onChange={val => update('subtitleColor', val)}
      />
      <ColorField
        label="Button color"
        value={state.btnColor}
        onChange={val => update('btnColor', val)}
      />
      <ColorField
        label="Button text color"
        value={state.btnTextColor}
        onChange={val => update('btnTextColor', val)}
      />

      <SectionLabel text="Rating Colors" />

      <ColorField
        label="Selected color"
        value={state.ratingSelectedColor}
        onChange={val => update('ratingSelectedColor', val)}
      />
      <ColorField
        label="Unselected color"
        value={state.ratingUnselectedColor}
        onChange={val => update('ratingUnselectedColor', val)}
      />

      <SectionLabel text="Typography" />

      <SliderField
        label="Font size"
        value={state.fontSize}
        onChange={val => update('fontSize', val)}
        min={10}
        max={20}
        unit="px"
      />

      {/* font weight select */}
      <div className="mb-4">
        <label className="block text-xs font-medium text-gray-500 mb-1">
          Font weight
        </label>
        <select
          value={state.fontWeight}
          onChange={e => update('fontWeight', e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-indigo-400"
        >
          <option value="400">Regular (400)</option>
          <option value="500">Medium (500)</option>
          <option value="600">Semi-bold (600)</option>
          <option value="700">Bold (700)</option>
        </select>
      </div>

      <SectionLabel text="Button" />

      <SliderField
        label="Border radius"
        value={state.borderRadius}
        onChange={val => update('borderRadius', val)}
        min={0}
        max={30}
        unit="px"
      />

      {/* button width and height side by side */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">
            Width (px)
          </label>
          <input
            type="number"
            value={state.btnWidth}
            onChange={e => update('btnWidth', Number(e.target.value))}
            min={80}
            max={280}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-indigo-400"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">
            Height (px)
          </label>
          <input
            type="number"
            value={state.btnHeight}
            onChange={e => update('btnHeight', Number(e.target.value))}
            min={28}
            max={60}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-indigo-400"
          />
        </div>
      </div>

    </div>
  )
}

export default StylingPanel