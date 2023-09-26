import React, { useEffect, useState } from 'react';

function Dropdown({ title, options, selected, menu, onClickMenuItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    if (selected) {
      setSelectedOption(selected);
    }
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    if (!menu) {
      setSelectedOption(option);
    }
    setIsOpen(false);
    onClickMenuItem(option);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex justify-between items-center w-full text-sm font-medium text-gray-700"
        >
          <div>{selectedOption || title}</div>
          <svg
            className={`-mr-1 ml-1 h-5 w-5 transform ${
              isOpen
                ? 'rotate-180 transition-transform duration-300'
                : 'rotate-0 transition-transform duration-300'
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute left-0 mt-2 w-32 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-white">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => selectOption(option)}
                className={`block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${
                  option === selectedOption ? 'bg-gray-100' : ''
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
