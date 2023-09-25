import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./product.constants";
import { getProduct } from "./product.thunk";
import { RibbonIcon, TrashIcon } from "../../assets/svgComponents";
import Breadcrumb from "../../components/breadcrumb";
import Button from "../../components/shared/button/button";
import Card from "../../components/shared/card";
import InputField from "../../components/shared/input/inputField";
import MapSection from "./mapSection";
import OfferDetailsSection from "./offerDetailsSection";
import ProfileSection from "./profileSection";
import VideoSection from "./videoSection";
import EditorField from "../../components/shared/input/quillEditor";

const TEST_PRODUCT_ID = 6781;

function ProductEditPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { product, video, user, offerDetails, company, error, loading } =
    useSelector((state) => state.product);

  const { control, formState, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitEdit = (form) => {
    console.log(form);
  };

  useEffect(() => {
        dispatch(getProduct(TEST_PRODUCT_ID));
  }, []);

  useEffect(()=>{
    if (product) {
        reset({productTitle: product.name})
    }
  },[product , reset])

  return loading ? (
    <div>Loading ...</div>
  ) : (
    <div className="flex mt-2">
      <div className="flex-[25%]">
        <ProfileSection profile={user} />
      </div>
      <div className="flex-[75%]">
        <div className="flex justify-between py-3">
          <Breadcrumb />
          <Button
            title="Edit"
            type="main"
            size="xs"
            onClick={() => {
              navigate(`/product`);
            }}
          />
        </div>
        <div className="flex justify-start items-stretch">
          <div className="w-[66%] h-full">
            <Card
              imageSrc={product.picture}
              badge={{
                icon: <RibbonIcon />,
                title: product.type?.name,
              }}
              cardTopButton={<TrashIcon color="white" />}
              onClickCardTopButton={() => {
                console.log("DELETE");
              }}
              cardForm
              cardFormSubmit={handleSubmit(onSubmitEdit)}
              cardFormCancel={()=>{
                navigate("/product")
              }}
              title={
                <InputField
                  placeholder="Title"
                  name="productTitle"
                  description="productDescription"
                  control={control}
                  errors={formState.errors?.productTitle?.message}
                  req
                />
              }
              description={<EditorField name="productDescription" control={control}/>}
            />
          </div>
          <div className="flex-1 h-full">
            <MapSection profile={user} company={company} />
          </div>
        </div>
        <div className="my-10">
          <VideoSection src={video} />
        </div>
        <div className="mb-10">
          <OfferDetailsSection offerDetails={offerDetails} />
        </div>
      </div>
    </div>
  );
}

export default ProductEditPage;
