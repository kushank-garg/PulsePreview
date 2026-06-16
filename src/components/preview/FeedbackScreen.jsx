import { useState } from 'react'
import { useCSAT } from '../../context/CSATContext'

function FeedbackScreen() {
  const { state } = useCSAT()
  const [selectedRating, setSelectedRating] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [comment, setComment] = useState('')

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

      {/* stars */}
      {state.ratingType === 'stars' ? (
        <div className="flex justify-center gap-1 mb-3">
          {[1, 2, 3, 4, 5].map(i => (
            <span
              key={i}
              onClick={() => setSelectedRating(i)}
              className="cursor-pointer transition-transform hover:scale-110"
              style={{
                color: i <= selectedRating
                  ? state.ratingSelectedColor
                  : state.ratingUnselectedColor,
                fontSize: state.fontSize + 8,
              }}
            >
              ★
            </span>
          ))}
        </div>
      ) : (
        /* numbers */
        <div className="flex justify-center gap-1 mb-3">
          {[1, 2, 3, 4, 5].map(i => (
            <div
              key={i}
              onClick={() => setSelectedRating(i)}
              className="flex items-center justify-center rounded cursor-pointer transition-transform hover:scale-110"
              style={{
                width: 28,
                height: 28,
                backgroundColor: i <= selectedRating
                  ? state.ratingSelectedColor
                  : state.ratingUnselectedColor,
                color: i <= selectedRating ? '#fff' : '#888',
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
              onClick={() => setSelectedOption(i)}
              className="mb-1 px-2 py-1 rounded border cursor-pointer transition-colors"
              style={{
                fontSize: state.fontSize - 3,
                color: selectedOption === i ? state.btnColor : state.subtitleColor,
                borderColor: selectedOption === i ? state.btnColor : '#e5e7eb',
                backgroundColor: selectedOption === i ? `${state.btnColor}15` : 'transparent',
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
          value={comment}
          onChange={e => setComment(e.target.value)}
          placeholder="Add a comment..."
          rows={2}
          className="w-full border border-gray-200 rounded-lg px-2 py-1 mb-3 resize-none focus:outline-none focus:border-indigo-300"
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