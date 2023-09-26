import { MagnifyIcon } from '../../../../assets/svgComponents';
import InputField from '../inputField';

function NavbarInput({ placeholder, name, onChange, control }) {
  return (
    <div className="flex items-center">
      <InputField name={name} placeholder={placeholder} control={control} onChange={onChange} />
      <div className="mt-2">
        <MagnifyIcon />
      </div>
    </div>
  );
}

export default NavbarInput;
