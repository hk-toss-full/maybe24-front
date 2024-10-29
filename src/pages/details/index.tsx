import Details from "../../components/details/Details";
// import productData from "../../data/product.json"
import { useLocation } from "react-router-dom";
import { GET_PRODUCT_BY_ID } from "../../api/query/getProductById";
import { GET_DISCOUNT_BY_PRODUCT_ID } from "../../api/query/getDiscountByProductId";
import { useQuery } from "@apollo/client";
import { GET_ROUND_BY_ID } from "../../api/query/getRoundByProductId";

const DetailsPage = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  // const [productId, setProductId] = useState();

  // const [productData, setProductData] = useState();
  // const [discountData, setDiscountData] = useState();

  const { loading: pLoading, data: productData } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { productId: productId },
  });
  // const { loading:dLoading, data:discountData } = useQuery(GET_DISCOUNT_BY_PRODUCT_ID, {variables: {productId:productId}});

  const { data: roundData } = useQuery(GET_ROUND_BY_ID, {
    variables: { productId },
  });

  return (
    <div>
      {!pLoading && (
        <Details
          productId={Number(productId)}
          productData={productData?.getProductById}
          roundData={roundData.getRoundByProductId}
        />
      )}
    </div>
  );
};

export default DetailsPage;
