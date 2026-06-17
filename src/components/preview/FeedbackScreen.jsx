import { useState } from 'react'
import { useCSAT } from '../../context/CSATContext'

function FeedbackScreen() {
  const { state } = useCSAT()
  const [selectedRating, setSelectedRating] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [comment, setComment] = useState('')
  const [justClicked, setJustClicked] = useState(null)

  function handleRatingClick(i) {
    setSelectedRating(i)
    setJustClicked(i)
    setTimeout(() => setJustClicked(null), 250)
  }

  return (
    <div className="p-5 transition-colors duration-300" style={{ backgroundColor: state.glassEffect ? 'transparent' : state.bgColor }}>
      <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-4" />

      <p
        className="mb-3 text-center transition-colors duration-300"
        style={{
          color: state.subtitleColor,
          fontSize: state.fontSize - 2,
        }}
      >
        {state.initSubtitle}
      </p>

      {state.ratingType === 'stars' ? (
        <div className="flex justify-center gap-1 mb-3">
          {[1, 2, 3, 4, 5].map(i => (
            <span
              key={i}
              onClick={() => handleRatingClick(i)}
              className={`cursor-pointer transition-all duration-200 hover:scale-110 ${justClicked === i ? 'animate-pop' : ''}`}
              style={{
                color: i <= selectedRating ? state.ratingSelectedColor : state.ratingUnselectedColor,
                fontSize: state.fontSize + 8,
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
              onClick={() => handleRatingClick(i)}
              className={`flex items-center justify-center rounded cursor-pointer transition-all duration-200 hover:scale-110 ${justClicked === i ? 'animate-pop' : ''}`}
              style={{
                width: 28,
                height: 28,
                backgroundColor: i <= selectedRating ? state.ratingSelectedColor : state.ratingUnselectedColor,
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

      {state.options.length > 0 && (
        <div className="mb-3">
          {state.options.map((opt, i) => (
            <div
              key={i}
              onClick={() => setSelectedOption(i)}
              className="mb-1 px-2 py-1 rounded border cursor-pointer transition-all duration-200 active:scale-95"
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

      {state.showComment && (
        <textarea
          value={comment}
          onChange={e => setComment(e.target.value)}
          placeholder="Add a comment..."
          rows={2}
          className="w-full border border-gray-200 rounded-lg px-2 py-1 mb-3 resize-none focus:outline-none focus:border-indigo-300 transition-colors duration-200"
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
        className="block mx-auto border-none cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 active:scale-95 active:translate-y-0"
      >
        {state.submitText || 'Submit Feedback'}
      </button>
    </div>
  )
}

export default FeedbackScreen