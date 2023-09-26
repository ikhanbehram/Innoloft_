function ProfileBlock({ imageSrc, name, companyName }) {
  return (
    <div className="flex gap-4 items-center justify-start">
      <img src={imageSrc} alt="profile image" className="rounded-full cursor-pointer w-12" />
      <div className="flex flex-col">
        <span className="block text-sm font-medium">{name}</span>
        <span className="block text-xs font-serif text-gray-500">{companyName}</span>
      </div>
    </div>
  );
}

export default ProfileBlock;
