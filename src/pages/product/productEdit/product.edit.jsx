import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../product.constants';
import { toast } from 'react-hot-toast';
import { editProduct, getProduct } from '../product.thunk';
import { resetMessageState } from '../product.slice';
import { RibbonIcon, TrashIcon } from '../../../assets/svgComponents';
import Breadcrumb from '../../../components/breadcrumb';
import Button from '../../../components/shared/button/button';
import Card from '../../../components/shared/card';
import InputField from '../../../components/shared/input/inputField';
import MapSection from '../mapSection';
import ProfileSection from '../profileSection';
import EditorField from '../../../components/shared/input/editorField';
import SelectCreateable from '../../../components/shared/creatableSelect';
import { mapSelectFieldData } from '../../../utils/helpers';

const TEST_PRODUCT_ID = 6781;

function ProductEditPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { product, video, user, offerDetails, company, error, editSuccess, loading } = useSelector(
    (state) => state.product,
  );

  const { control, formState, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitEdit = (form) => {
    dispatch(editProduct({ id: TEST_PRODUCT_ID, ...form }));
  };
  useEffect(() => {
    if (product) {
      reset(
        {
          productTitle: product.name,
          productDescription: product.description,
          video: video,
          costs: mapSelectFieldData([offerDetails?.costs]),
          categories: mapSelectFieldData(
            offerDetails?.categories?.map((category) => category.name),
          ),
          businessModels: mapSelectFieldData(
            offerDetails?.businessModels?.map((model) => model.name),
          ),
          trl: mapSelectFieldData([offerDetails?.trl?.name]),
        },
        { keepTouched: false },
      );
    }
  }, [product]);

  useEffect(() => {
    dispatch(getProduct(TEST_PRODUCT_ID));
  }, []);

  useEffect(() => {
    if (editSuccess) {
      toast.success(editSuccess);
      navigate('/');
    }
    if (error) {
      toast.error(error);
    }
    dispatch(resetMessageState());
  }, [error, editSuccess, dispatch]);

  return loading ? (
    <div className="h-[100vh] w-full flex justify-center items-center">
      <div className="spinner"></div>
    </div>
  ) : (
    <div className="flex mt-2">
      <div className="flex-[25%] hidden md:block">
        <ProfileSection profile={user} />
      </div>
      <div className="flex-[75%]">
        <div className="flex justify-between py-3">
          <Breadcrumb />
          <Button
            title="View Offer"
            type="main"
            size="xs"
            onClick={() => {
              navigate(`/product`);
            }}
          />
        </div>
        <div className=" flex justify-start items-stretch flex-col md:flex-row">
          <div className="w-full md:w-[66%] h-full">
            <Card
              imageSrc={product.picture}
              badge={{
                icon: <RibbonIcon />,
                title: product.type?.name,
              }}
              cardTopButton={<TrashIcon color="white" />}
              onClickCardTopButton={() => {
                console.log('DELETE');
              }}
              cardForm
              cardFormSubmit={handleSubmit(onSubmitEdit)}
              cardFormSubmitDisabled={!formState.isDirty}
              cardFormCancel={() => {
                navigate('/product');
              }}
              title={
                <InputField
                  placeholder="Title"
                  name="productTitle"
                  control={control}
                  errors={formState.errors?.productTitle?.message}
                  req
                />
              }
              description={
                <div className="mt-3">
                  <EditorField name="productDescription" control={control} />
                </div>
              }
            />
          </div>
          <div className="flex-1 h-full">
            <MapSection profile={user} company={company} />
          </div>
        </div>
        <div className="my-10">
          <div className="p-3 border-2">
            <h4 className="text-gray-600 font-medium">Video</h4>
            <InputField name="video" placeholder="video" control={control} />
          </div>
        </div>
        <div className="mb-10 border-2 p-3 flex justify-start items-center gap-2 flex-wrap">
          <div className="flex-[40%]">
            <SelectCreateable
              isMulti
              name="costs"
              placeholderText="Costs"
              control={control}
              label="Costs"
              noOptionsMessage="Edit/Add Costs"
            />
          </div>
          <div className="flex-[40%]">
            <SelectCreateable
              isMulti
              name="trl"
              placeholderText="TRL"
              control={control}
              label="TRL"
              noOptionsMessage="Edit/Add TRL"
            />
          </div>
          <div className="flex-[40%]">
            <SelectCreateable
              isMulti
              name="businessModels"
              placeholderText="Business Models"
              control={control}
              label="Business Models"
              noOptionsMessage="Edit/Add BM's"
            />
          </div>
          <div className="flex-[40%]">
            <SelectCreateable
              isMulti
              name="categories"
              placeholderText="Categories"
              control={control}
              label="Categories"
              noOptionsMessage="Edit/Add Categories"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductEditPage;
