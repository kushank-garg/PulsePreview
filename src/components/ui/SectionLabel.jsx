// just a reusable section heading, nothing fancy
function SectionLabel({ text }) {
  return (
    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mt-5 mb-3 border-b border-gray-100 pb-2">
      {text}
    </p>
  )
}

export default SectionLabel