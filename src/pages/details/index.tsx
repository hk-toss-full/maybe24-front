import Details from "../../components/details/Details";
import productData from "../../data/product.json"

const DetailsPage = () => {
  // const productId = useLocation().pathname.substring(6);
  const Data = productData[0];
  console.log(Data);

  return (
      <div>
        <Details productId={Data.productId} title={Data.title} location={Data.location} thumbNail={Data.thumbnail} discount={Data.discount}/>
      </div>
  )
}

export default DetailsPage;