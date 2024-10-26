import { useEffect, useState } from "react";
import axios from "axios";

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
    getProductId(productId);
  }, []);

  return (
    <div>
      <div className="max-w-[1300px] m-[20px]">
        <h1 className="text-sm">상품명</h1> 
          <p className="text-sm">공연 장소</p>
          <hr/>
      </div>
      <div className="flex">
        <p>
          <img src="http://tkfile.yes24.com/upload2/PerfBlog/202409/20240924/20240924-50570.jpg"></img>
          가격 
          <p className="w-[600px] h-[100px] bg-grey">60,000원
            할인 
          </p>
          <hr />
        </p>
        </div>
        </div>
    
  );
}
export default Details;