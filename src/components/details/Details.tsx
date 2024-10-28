import { useEffect, useState } from "react";
import AverageRating from "./AverageRating";
import ReservationButton from "./ReservationButton";
import { useParams } from "react-router-dom";


interface Product{
  productId: number;
  title: string;
  location: string;
  thumbNail: string;
}

// const getProduct = async(productId:number) => {
//   const {data} = await axios({
//     method: "GET",
//     url: `http://localhost:9000/${productId}`
//   })
//   return data;
// }


const Details = () => {
  const { productId } = useParams<{productId: string}>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadDetails = async () => {
      try{
        const detailsData = await getProduct(Number(productId));
        setProduct(detailsData);
      }catch (err) {
        setError('정보를 불러오는 데 오류가 발생했습니다.');
    } finally {
        setLoading(false);
    }
};
  loadDetails();
}, [productId]);

if (loading) return <p>로딩 중...</p>;
if (error) return <p>{error}</p>;
if (!product) return <p>상품 정보를 찾을 수 없습니다.</p>;

  return (
    <div className="mr-[100px] ml-[100px] mt-[30px]">
        <div>
          <h1 className="text-[30px] mb-[20px] font-bold">상품명</h1> 
            <p className="mb-[10px] font-bold" >공연 장소</p>
            <hr className="border-black border-[1px]"/>
        </div>
        <div className="m-[50px]">
          <div className="ml-[40px] mt-[30px] flex flex-row">
            <img src="http://tkfile.yes24.com/upload2/PerfBlog/202409/20240924/20240924-50570.jpg"></img>
            <dl className="ml-[70px] flex align-items justify-content">
              <dt className="m-[30px] text-[15px] font-bold">가격</dt>
              <dd className="m-[15px] p-[20px] w-[300px] h-[100px] bg-gray-200 ">
              60,000원<br/>
              <button className="mt-[10px] p-[3px] border-solid border-2 border-gray-600 w-[90px] h-[32px]">할인 정보</button> 
              <div>
                <AverageRating productId={product.productId} />
                <div>
                  <button className="font-bold" onClick={() => (window.location.href=`http://localhost:5173/${product.productId}/reviews`)}>관람후기</button>
                </div>
              </div>
              <div className="mt-[10px] flex space-x-[10px]">
                <ReservationButton />
                
              </div>
              </dd>
            </dl>
          </div>
        </div>
    </div>
    
  );
}
export default Details;