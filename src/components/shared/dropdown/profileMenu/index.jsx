import Dropdown from "..";

function ProfileMenu({ profile }) {
  const profileImg = (
    <img
      src={profile.profilePicture || "https://placehold.co/50x50"}
      className=" rounded-full h-7"
    />
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
