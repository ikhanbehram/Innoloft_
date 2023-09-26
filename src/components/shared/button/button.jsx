import { MAIN, SECONDARY } from '../../../constants';

function Button({ title, size, type, disabled, onClick }) {
  let buttonClasses = 'text-sm rounded-md font-medium';

  switch (size) {
    case 'lg':
      buttonClasses += ' px-12 py-4';
      break;
    case 'md':
      buttonClasses += ' px-10 py-3';
      break;
    case 'sm':
      buttonClasses += ' px-8 py-2';
      break;
    case 'xs':
      buttonClasses += ' px-5 py-1';
      break;
    default:
      buttonClasses += ' px-10 py-3';
      break;
  }

  if (type === MAIN) {
    buttonClasses += ' bg-slate-800 text-white';
  } else if (type === SECONDARY) {
    buttonClasses += ' bg-white shadow-md text-black';
  }

  return (
    <button
      className={`${buttonClasses} ${disabled ? 'opacity-70' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
}

export default Button;
