import { useEffect, useState } from "react";
import axios from "axios";

import AverageRating from "./AverageRating";
import ReservationButton from "./ReservationButton";
import ReviewButton from "./ReviewButton";

const Details = () => {

  const [productId, setProductId] = useState(null);

  const getProductId = async (productId: number) => {
    try{
      const response = await axios.get(`http://localhost:9000/${productId}`);
      setProductId(response.data.productId);
    } catch (error) {
      console.error('Error fetching product ID:', error);
    }
  };

  useEffect(() => {
    getProductId();
  }, []);

  return (
    <div className="mr-[100px] ml-[100px] mt-[30px]">
        <div>
          <h1 className="text-[30px] mb-[20px] font-bold">상품명</h1> 
            <p className="mb-[10px] font-bold" >공연 장소</p>
            <hr className="border-black border border-[1px]"/>
        </div>
        <div className="m-[50px]">
          <div className="ml-[40px] mt-[30px] flex flex-row">
            <img src="http://tkfile.yes24.com/upload2/PerfBlog/202409/20240924/20240924-50570.jpg"></img>
            <dl className="ml-[70px] flex align-items justify-content">
              <dt className="m-[30px] text-[15px] font-bold">가격</dt>
              <dd className="m-[15px] p-[20px] w-[300px] h-[100px] bg-gray-200 ">
              60,000원<br/>
              <button className="mt-[10px] p-[3px] border-solid border-2 border-gray-600">할인</button> 
              <div>
                <AverageRating productId={productId} />
                <ReviewButton />
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