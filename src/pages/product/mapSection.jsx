import { LocationIcon } from "../../assets/svgComponents";
import ProfileBlock from "../../components/shared/profileBlock";

function MapSection() {
  return (
    <div className="flex flex-col p-3 gap-5 border-2 items-start">
      <p>Offered By</p>
      <img src="https://img.innoloft.com/logo.svg" className="h-8"/>
      <ProfileBlock
        imageSrc="https://placehold.co/50x50"
        name="Sven Pietsch"
        companyName="Innoloft Gmbh"
      />
      <address className="flex items-start gap-2 text-sm text-gray-500 font-medium">
        <span className="mt-1">
          <LocationIcon />
        </span>
        julicher stabe 72a, 52070 Aachen, Germany
      </address>
      <map className="w-full h-44"></map>
    </div>
  );
}

export default MapSection;
