import AverageRating from "./AverageRating";
import ReservationButton from "./ReservationButton";
import productData from "../../data/product.json"
import { Link } from "react-router-dom";

interface Discount {
  type: string;
  rate: number;
}

interface productData{
  productId: number;
  title: string;
  location: string;
  thumbNail: string;
  discount: Discount;
}


const Details = ({productId, title, location, thumbNail, discount}: productData) => {

  return (
    <div className="mr-[100px] ml-[100px] mt-[30px]">
        <div>
          <h1 className="text-[30px] mb-[20px] font-bold">{title}</h1> 
            <p className="mb-[10px] font-bold" >{location}</p>
            <hr className="border-black border-[1px]"/>
        </div>
        <div className="m-[50px]">
          <div className="ml-[40px] mt-[30px] flex flex-row">
            <img src={thumbNail}></img>
            <dl className="ml-[70px] flex align-items justify-content">
              <dt className="m-[30px] text-[15px] font-bold">가격</dt>
              <dd className="m-[15px] p-[20px] w-[300px] h-[100px] bg-gray-200 ">
              60,000원<br/>
              <p className="mt-[10px]">{discount.type} {discount.rate}%</p>
              <div>
                <AverageRating productId={productId} />
                <div>
                  <Link to={`/reviews/${productId}`} className="font-bold" >관람후기</Link>
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