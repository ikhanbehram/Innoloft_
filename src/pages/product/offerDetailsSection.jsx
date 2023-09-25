import {
  ChessknightIcon,
  ClockIcon,
  CogwheelIcon,
  DollarsackIcon,
} from "../../assets/svgComponents";
import Tag from "../../components/shared/tag";

function DetailItem({ title, icon, tags }) {
  return (
    <div className="flex flex-col items-start justify-center gap-1">
      <div className="m-0 p-0 text-gray-600 font-medium flex justify-center items-center gap-2">
        <span className="block">{icon}</span>
        <span className="block">{title}</span>
      </div>
      <div className="flex ml-3 gap-2 flex-wrap">
        {tags &&
          tags.length &&
          tags.map((tag) => {
            return <Tag title={tag} />;
          })}
      </div>
    </div>
  );
}

function OfferDetailsSection({ offerDetails }) {
  return (
    <div className="flex flex-col p-3 border-2">
      <p className="text-lg text-gray-600 font-medium">Offer Details</p>
      <div className="flex py-2 flex-wrap justify-start items-start">
        <div className="flex flex-[50%] px-2 py-3">
          <DetailItem
            title="Business Models"
            tags={offerDetails?.businessModels?.map((model) => model.name)}
            icon={<ChessknightIcon />}
          />
        </div>
        <div className="flex flex-[50%] px-2 py-3">
          <DetailItem
            title="Categories"
            tags={offerDetails?.categories?.map((category) => category.name)}
            icon={<CogwheelIcon />}
          />
        </div>
        <div className="flex flex-[50%] px-2 py-3">
          <DetailItem
            title="Costs"
            tags={[offerDetails?.costs]}
            icon={<DollarsackIcon />}
          />
        </div>
        <div className="flex flex-[50%] px-2 py-3">
          <DetailItem
            title="TRL"
            tags={[offerDetails?.trl?.name]}
            icon={<ClockIcon />}
          />
        </div>
      </div>
    </div>
  );
}

export default OfferDetailsSection;
