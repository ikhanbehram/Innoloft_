import { memo } from "react";
import Navbar from "../../layouts/navbar";
import NavbarInput from "../shared/input/navbarInput";
import LocaleDropdown from "../shared/dropdown/localeDropdown";
import ProfileMenu from "../shared/dropdown/profileMenu";
import { BellIcon, CommentIcon } from "../../assets/svgComponents";

function NavbarComponent({}) {
  return (
    <Navbar>
      <div className="flex items-center w-full">
        <div className="flex items-center justify-between w-full">
          <div className="flex-[25%]">
            <img src="https://img.innoloft.com/logo.svg" className="h-6" />
          </div>
          <div className="flex justify-between items-center flex-[75%]">
            <div className="w-[50%]">
              <NavbarInput
                placeholder="Enter interests,keyword,company name, etc,"
                onChange={() => {}}
              />
            </div>
            <div className="flex items-center gap-3">
              <CommentIcon />
              <LocaleDropdown />
              <BellIcon />
              <ProfileMenu />
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
}
export default memo(NavbarComponent);
