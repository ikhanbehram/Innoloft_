import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProduct } from './product.thunk';
import { useNavigate } from 'react-router-dom';
import { RibbonIcon } from '../../assets/svgComponents';
import Breadcrumb from '../../components/breadcrumb';
import Button from '../../components/shared/button/button';
import Card from '../../components/shared/card';
import MapSection from './mapSection';
import OfferDetailsSection from './offerDetailsSection';
import ProfileSection from './profileSection';
import VideoSection from './videoSection';

const TEST_PRODUCT_ID = 6781;

function ProductPage() {
  const navigate = useNavigate();
  const { product, video, user, offerDetails, company, loading } = useSelector(
    (state) => state.product,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(TEST_PRODUCT_ID));
  }, []);

  return loading ? (
    <div className="h-[100vh] w-full flex justify-center items-center">
      <div className="spinner"></div>
    </div>
  ) : (
    <div className="flex mt-2">
      {window?.innoloftConfig?.hasUserSection && (
        <div className="flex-[25%] hidden sm:block">
          <ProfileSection profile={user} />
        </div>
      )}
      <div className="flex-[75%]">
        <div className="flex justify-between py-3">
          <Breadcrumb />
          <Button
            title="Edit"
            type="main"
            size="xs"
            onClick={() => {
              navigate(`edit/${TEST_PRODUCT_ID}`);
            }}
          />
        </div>
        <div className="flex justify-start items-stretch flex-col md:flex-row">
          <div className="w-full md:w-[66%] h-full">
            <Card
              imageSrc={product.picture}
              badge={{
                icon: <RibbonIcon />,
                title: product.type?.name,
              }}
              title={product.name}
              description={product.description}
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

export default ProductPage;
