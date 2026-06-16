const initialState = {
  // content - initial feedback screen
  initTitle: 'How was your experience?',
  initSubtitle: 'We would love to hear from you!',

  // content - feedback screen
  ratingType: 'stars', // 'stars' or 'numbers'
  options: ['Too complicated', 'Just right', 'Needs improvement'],
  showComment: true,
  submitText: 'Submit Feedback',

  // content - thank you screen
  tyTitle: 'Thank you!',
  tySubtitle: 'Your feedback means a lot to us.',
  tyBtnText: 'Close',
  tyMedia: null, // will store base64 image

  // styling
  bgColor: '#ffffff',
  titleColor: '#111827',
  subtitleColor: '#6b7280',
  btnColor: '#6366f1',
  btnTextColor: '#ffffff',
  fontSize: 14,
  fontWeight: '500',
  borderRadius: 12,
  btnWidth: 160,
  btnHeight: 40,
  ratingSelectedColor: '#f59e0b',
  ratingUnselectedColor: '#d1d5db',
}

export default initialState