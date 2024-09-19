const ActionButton = ({ onClick, icon: Icon, text }) => {
  return (
    <button onClick={onClick} className="px-3 py-1 bg-gray-700 rounded-full text-sm flex items-center">
    <Icon className="mr-1" size={16} /> {text}
  </button>
  )
}

export default ActionButton
