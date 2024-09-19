const Input = ({ name, value, onChange, placeholder }) => {
  return (
    <input
      name={name} // Ensure the name is passed
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-2 bg-gray-700 rounded"
    />
  );
};

export default Input;
