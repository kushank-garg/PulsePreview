import { useCSAT } from '../../context/CSATContext'
import InputField from '../ui/InputField'
import SectionLabel from '../ui/SectionLabel'

function InitialFeedback() {
  const { state, dispatch } = useCSAT()

  function update(field, value) {
    dispatch({ type: 'UPDATE_FIELD', field, value })
  }

  return (
    <div>
      <SectionLabel text="Initial Feedback" />
      <InputField
        label="Title"
        value={state.initTitle}
        onChange={val => update('initTitle', val)}
        placeholder="How was your experience?"
      />
      <InputField
        label="Subtitle"
        value={state.initSubtitle}
        onChange={val => update('initSubtitle', val)}
        placeholder="We'd love to hear from you!"
      />
    </div>
  )
}

export default InitialFeedback