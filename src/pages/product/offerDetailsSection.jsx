import Tag from "../../components/shared/tag";

function DetailItem({ title, icon, tags }) {
  return (
    <div className="flex flex-col items-start justify-center gap-1">
      <p className="m-0 p-0 text-gray-600 font-medium">
        <span>{icon}</span>
        {title}
      </p>
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

function OfferDetailsSection() {
  return (
    <div className="flex flex-col p-3 border-2">
      <p className="text-lg text-gray-600 font-medium">Offer Details</p>
      <div className="flex py-2 flex-wrap justify-start items-start">
        <div className="flex flex-[50%] px-2 py-3">
          <DetailItem
            title="Technology"
            tags={["label1", "label2", "label1", "label2", "label1", "label2"]}
          />
        </div>
      </div>
    </div>
  );
}

export default OfferDetailsSection;
