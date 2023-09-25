import { Controller } from "react-hook-form";

function InputField({
  placeholder,
  label,
  type,
  className = "",
  control,
  name,
  req,
  errors,
  value,
  ...rest
}) {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <label className="py-1">{label}</label>
        {req && <label>*</label>}
      </div>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur } }) => (
          <input
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            {...rest}
            type={type}
            value={value}
            className={`w-full rounded-md placeholder:text-sm px-3 placeholder:text-gray-600 placeholder:font-medium pr-8 border-2 ${
              errors ? "border-red-400" : ""
            }`}
          />
        )}
      />
      {errors && (
        <span className="text-[12px] text-red-600 ml-1 -mt-2">{errors}!</span>
      )}
    </div>
  );
}

export default InputField;
