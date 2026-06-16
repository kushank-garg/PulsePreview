import { useCSAT } from '../../context/CSATContext'

function InitialScreen() {
  const { state } = useCSAT()

  return (
    <div className="p-5" style={{ backgroundColor: state.bgColor }}>
      {/* drag handle */}
      <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-4" />

      <p
        className="mb-1"
        style={{
          color: state.titleColor,
          fontSize: state.fontSize,
          fontWeight: state.fontWeight,
        }}
      >
        {state.initTitle || 'How was your experience?'}
      </p>

      <p
        className="mb-4"
        style={{
          color: state.subtitleColor,
          fontSize: state.fontSize - 2,
        }}
      >
        {state.initSubtitle || "We'd love to hear from you!"}
      </p>

      <button
        style={{
          backgroundColor: state.btnColor,
          color: state.btnTextColor,
          width: Math.min(state.btnWidth, 220),
          height: state.btnHeight,
          borderRadius: state.borderRadius,
          fontSize: state.fontSize - 1,
          fontWeight: state.fontWeight,
        }}
        className="block mx-auto border-none cursor-pointer"
      >
        Rate now
      </button>
    </div>
  )
}

export default InitialScreen