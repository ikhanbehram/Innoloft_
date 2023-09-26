import { memo } from 'react';
import Navbar from '../../layouts/navbar';
import NavbarInput from '../shared/input/navbarInput';
import LocaleDropdown from '../shared/dropdown/localeDropdown';
import ProfileMenu from '../shared/dropdown/profileMenu';
import { BellIcon, CommentIcon } from '../../assets/svgComponents';
import { useForm } from 'react-hook-form';

function NavbarComponent({ profile }) {
  const { control } = useForm({});
  return (
    <Navbar>
      <div className="flex items-center w-full">
        <div className="flex items-center justify-between w-full">
          <div className="flex-[25%]">
            <img
              src={window?.innoloftConfig?.logo || 'https://img.innoloft.com/logo.svg'}
              className="h-6"
            />
          </div>
          <div className="justify-between items-center flex-[75%] hidden sm:flex">
            <div className="w-[50%]">
              <NavbarInput
                placeholder="Enter interests,keyword,company name, etc,"
                name="navbarInput"
                control={control}
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              />
            </div>
            <div className="flex items-center gap-3">
              <CommentIcon />
              <LocaleDropdown />
              <BellIcon />
              <ProfileMenu profile={profile} />
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
}
export default memo(NavbarComponent);
