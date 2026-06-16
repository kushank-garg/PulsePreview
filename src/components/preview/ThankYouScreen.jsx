import { useCSAT } from '../../context/CSATContext'

function ThankYouScreen() {
  const { state } = useCSAT()

  return (
    <div className="p-5 text-center" style={{ backgroundColor: state.bgColor }}>
      <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-4" />

      {/* media */}
      {state.tyMedia && !state.tyMedia.includes('application/json') ? (
        <img
          src={state.tyMedia}
          alt="thank you"
          className="h-16 object-contain mx-auto mb-3"
        />
      ) : (
        <div className="text-4xl mb-3">🎉</div>
      )}

      <p
        className="mb-1"
        style={{
          color: state.titleColor,
          fontSize: state.fontSize,
          fontWeight: state.fontWeight,
        }}
      >
        {state.tyTitle || 'Thank you!'}
      </p>

      <p
        className="mb-4"
        style={{
          color: state.subtitleColor,
          fontSize: state.fontSize - 2,
        }}
      >
        {state.tySubtitle || 'Your feedback means a lot to us.'}
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
        className="border-none cursor-pointer mx-auto block"
      >
        {state.tyBtnText || 'Close'}
      </button>
    </div>
  )
}

export default ThankYouScreen