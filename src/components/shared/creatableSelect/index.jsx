import React from 'react';
import CreateableSelect from 'react-select/creatable';
import { Controller } from 'react-hook-form';

function SelectCreateable({
  isMulti,
  name,
  label,
  placeholderText,
  req,
  control,
  options,
  disabled,
  error,
  noOptionsMessage,
}) {
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px solid lightgrey',
      padding: 6,
      fontSize: '0.9rem',
      backgroundColor: state.isFocused ? 'lightgrey' : '#fff',
      color: '#2b2d2f',
    }),
    control: (provided, state) => ({
      ...provided,
      border: error
        ? '1px solid red'
        : state.isFocused
        ? '1px solid #35d1f5'
        : '1px solid lightgrey',
      borderColor: '#35d1f5',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: '8px',
      width: '100%',
      boxShadow: state.isFocused ? '0rem 0rem 0rem 0.125rem rgba(129, 227, 249, 1)' : '',
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: '#d2d6da',
      fontSize: '14px',
      textTransform: 'capitalize',
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: '#2b2d2f',
      fontSize: '14px',
    }),
    menu: (provided, state) => ({
      ...provided,
      border: '1px solid lightgrey',
      borderRadius: '8px',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff',
      width: '80%',
    }),
    menuPortal: (provided) => ({ ...provided, zIndex: 9999 }),
    noOptionsMessage: (provided, state) => ({
      ...provided,
      color: '#9b9b9b',
      fontSize: '14px',
      fontWeight: '500',
      textTransform: 'capitalize',
    }),
    multiValue: (provided, state) => ({
      ...provided,
      color: '#9b9b9b',
      fontSize: '.8rem',
      height: '1.rem',
    }),
  };
  return (
    <>
      <div>
        <div className="flex justify-between items-start">
          <label className="text-xs ml-1 font-medium text-gray-600">{label}</label>
          {req && <label>*</label>}
        </div>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <CreateableSelect
              isMulti={isMulti}
              name={name}
              ref={ref}
              onBlur={onBlur}
              onChange={(val) => onChange(isMulti ? [...val] : val.value)}
              value={value}
              placeholder={placeholderText}
              options={options}
              isDisabled={disabled}
              styles={customStyles}
              noOptionsMessage={() => noOptionsMessage || 'Create Skill'}
            />
          )}
        />
      </div>
    </>
  );
}

export default SelectCreateable;
