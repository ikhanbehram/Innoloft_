import Dropdown from "..";

function ProfileMenu() {
  const profileImg = (
    <img src="https://placehold.co/50x50" className=" rounded-full h-7" />
  );
  const onClickMenuItem = (item) => {};
  return (
    <div className="pt-1">
      <Dropdown
        menu={true}
        title={profileImg}
        options={["Profile", "Logout"]}
        onClickMenuItem={onClickMenuItem}
      />
    </div>
  );
}
export default ProfileMenu;
