import { useCSAT } from '../../context/CSATContext'

function ThankYouScreen() {
  const { state } = useCSAT()

  return (
    <div className="p-5 text-center transition-colors duration-300" style={{ backgroundColor: state.glassEffect ? 'transparent' : state.bgColor }}>
      <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-4" />

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
        className="mb-1 transition-colors duration-300"
        style={{
          color: state.titleColor,
          fontSize: state.fontSize,
          fontWeight: state.fontWeight,
        }}
      >
        {state.tyTitle || 'Thank you!'}
      </p>

      <p
        className="mb-4 transition-colors duration-300"
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
        className="border-none cursor-pointer mx-auto block transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 active:scale-95 active:translate-y-0"
      >
        {state.tyBtnText || 'Close'}
      </button>
    </div>
  )
}

export default ThankYouScreen