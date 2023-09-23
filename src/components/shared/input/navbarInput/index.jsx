import { MagnifyIcon } from "../../../../assets/svgComponents";
import InputField from "../inputField";

function NavbarInput({ placeholder, onChange }) {
  return (
    <div className="flex items-center">
      <InputField placeholder={placeholder} onChange={onChange}/>
      <MagnifyIcon />
    </div>
  );
}

export default NavbarInput;
