import { HomeIcon, MembersIcon, NetworkingIcon } from '../../assets/svgComponents';
import Dropdown from '../../components/shared/dropdown';
import ProfileBlock from '../../components/shared/profileBlock';

function SectionButton({ title, icon }) {
  return (
    <div className="flex justify-start gap-2">
      {icon}
      <div className="text-gray-500 text-sm font-medium">{title}</div>
    </div>
  );
}

function ProfileSection({ profile }) {
  return (
    <div className="flex flex-col items-start">
      <ProfileBlock
        imageSrc={profile?.profilePicture}
        name={profile?.name}
        companyName={profile?.position}
      />
      <div className="flex flex-col gap-4 pt-4 pl-1">
        <SectionButton title="Home" icon={<HomeIcon />} />
        <SectionButton title="Members" icon={<MembersIcon />} />
        <div className="">
          <Dropdown
            title={<SectionButton title="Organizations" icon={<NetworkingIcon />} />}
            options={['Profile', 'Logout']}
            menu={true}
          />
        </div>
      </div>
    </div>
  );
}

export default ProfileSection;
