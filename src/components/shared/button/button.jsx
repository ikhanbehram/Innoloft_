function Button({ title, size, type, disabled, onClick }) {
  let buttonClasses = "text-sm text-white rounded-md font-medium";

  switch (size) {
    case "lg":
      buttonClasses += " px-12 py-4";
      break;
    case "md":
      buttonClasses += " px-10 py-3";
      break;
    case "sm":
      buttonClasses += " px-8 py-2";
      break;
    case "xs":
      buttonClasses += " px-5 py-1";
      break;
    default:
      buttonClasses += " px-10 py-3";
      break;
  }

  if (type === "main") {
    buttonClasses += " bg-slate-800";
  } else if (type === "secondary") {
    buttonClasses += " bg-white shadow-md text-gray-600";
  }

  return (
    <button className={`${buttonClasses} ${disabled ? "opacity-70" : ""}`} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  );
}

export default Button;
