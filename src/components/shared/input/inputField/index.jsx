function InputField({ placeholder, onChange, inputValue, id, ...rest }) {
  return (
    <input
      placeholder={placeholder}
      onChange={onChange}
      className="w-full rounded-md placeholder:text-sm px-3 placeholder:text-gray-600 placeholder:font-medium pr-8"
      value={inputValue}
      id={id}
      {...rest}
    />
  );
}

export default InputField;
