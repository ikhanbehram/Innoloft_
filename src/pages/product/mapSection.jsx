import { LocationIcon } from "../../assets/svgComponents";
import MapComponent from "../../components/shared/map";
import ProfileBlock from "../../components/shared/profileBlock";

function MapSection({ profile, company }) {
  return (
    <div className="flex flex-col p-3 gap-5 border-2 items-start">
      <p>Offered By</p>
      {console.log(company)}
      <img
        src={company.logo || "https://img.innoloft.com/logo.svg"}
        className="h-8"
      />
      <ProfileBlock
        imageSrc={profile?.profilePicture}
        name={profile?.name}
        companyName={profile?.position}
      />

      {company?.address && (
        <address className="flex items-start gap-2 text-sm text-gray-500 font-medium">
          <span className="mt-1">
            <LocationIcon />
          </span>
          {`${company.address.street}, ${company.address.zipCode} ${company.address.city.name}, ${company.address.country?.name}`}
        </address>
      )}

      <map className="w-full h-44">
        {company?.address?.latitude && company?.address?.longitude && (
          <MapComponent
            coords={{
              lat: +company.address.latitude,
              lng: +company.address.longitude,
            }}
          />
        )}
       
      </map>
    </div>
  );
}

export default MapSection;
