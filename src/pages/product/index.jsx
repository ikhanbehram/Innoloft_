import { RibbonIcon } from "../../assets/svgComponents";
import Breadcrumb from "../../components/breadcrumb";
import Button from "../../components/shared/button/button";
import Card from "../../components/shared/card";
import MapSection from "./mapSection";
import OfferDetailsSection from "./offerDetailsSection";
import ProfileSection from "./profileSection";
import VideoSection from "./videoSection";
import { useSelector } from "react-redux";

function ProductPage() {
  const product = useSelector((state) => state.product);

  return (
    <div className="flex mt-2">
      <div className="flex-[25%]">
        <ProfileSection />
      </div>
      <div className="flex-[75%]">
        <div className="flex justify-between py-3">
          <Breadcrumb />
          <Button title="Edit" type="main" size="xs" onClick={() => {}} />
        </div>
        <div className="flex justify-start items-stretch">
          <div className="w-[66%] h-full">
            <Card
              imageSrc="https://www.cultofmac.com/wp-content/uploads/2017/01/aBvc7g8.jpg"
              badge={{
                icon: <RibbonIcon />,
                title: "Patent",
              }}
              title="Title"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
            />
          </div>
          <div className="flex-1 h-full">
            <MapSection />
          </div>
        </div>
        <div className="my-10">
          <VideoSection />
        </div>
        <div className="mb-10">
          <OfferDetailsSection />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
