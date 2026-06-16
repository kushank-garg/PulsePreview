import { useCSAT } from '../../context/CSATContext'

function FeedbackScreen() {
  const { state } = useCSAT()

  return (
    <div className="p-5" style={{ backgroundColor: state.bgColor }}>
      <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-4" />

      <p
        className="mb-3 text-center"
        style={{
          color: state.subtitleColor,
          fontSize: state.fontSize - 2,
        }}
      >
        {state.initSubtitle}
      </p>

      {/* stars or numbers */}
      {state.ratingType === 'stars' ? (
        <div className="flex justify-center gap-1 mb-3">
          {[1, 2, 3, 4, 5].map(i => (
            <span
              key={i}
              style={{
                color: i <= 3 ? state.ratingSelectedColor : state.ratingUnselectedColor,
                fontSize: state.fontSize + 6,
              }}
            >
              ★
            </span>
          ))}
        </div>
      ) : (
        <div className="flex justify-center gap-1 mb-3">
          {[1, 2, 3, 4, 5].map(i => (
            <div
              key={i}
              className="flex items-center justify-center rounded"
              style={{
                width: 28,
                height: 28,
                backgroundColor: i <= 3 ? state.ratingSelectedColor : state.ratingUnselectedColor,
                color: '#fff',
                fontSize: state.fontSize - 2,
                fontWeight: state.fontWeight,
              }}
            >
              {i}
            </div>
          ))}
        </div>
      )}

      {/* options */}
      {state.options.length > 0 && (
        <div className="mb-3">
          {state.options.map((opt, i) => (
            <div
              key={i}
              className="mb-1 px-2 py-1 rounded border border-gray-200"
              style={{
                fontSize: state.fontSize - 3,
                color: state.subtitleColor,
              }}
            >
              {opt}
            </div>
          ))}
        </div>
      )}

      {/* comment box */}
      {state.showComment && (
        <textarea
          readOnly
          placeholder="Add a comment..."
          rows={2}
          className="w-full border border-gray-200 rounded-lg px-2 py-1 mb-3 resize-none"
          style={{ fontSize: state.fontSize - 3 }}
        />
      )}

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
        {state.submitText || 'Submit Feedback'}
      </button>
    </div>
  )
}

export default FeedbackScreen