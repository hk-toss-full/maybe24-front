import axios from "axios";
import { useEffect, useState } from "react";

interface AverageRating{
  average: number;
}

interface AverageRatingProps {
  productId: number;
}

const getAverageRating = async(productId:number) => {
  const {data} = await axios({
    method: "GET",
    url: `http://localhost:9000/reviews/average-rating/${productId}`
  })
  return data;
}

const AverageRating: React.FC<AverageRatingProps> = ({productId}) => {
  const [averageRating, setAverageRating] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadRating = async () => {
      try{
        const ratingData = await getAverageRating(productId);
        setAverageRating(ratingData);
      }catch (err) {
        setError('정보를 불러오는 데 오류가 발생했습니다.');
    } finally {
        setLoading(false);
    }
};
  loadRating();
}, [productId]);

  return(
    <dl className="flex align-items justify-content pt-[50px]">
      <dt className="mr-[10px] mb-[45px] font-semibold">별점</dt> 
      <dd>
        {averageRating !== null ? averageRating.toFixed(2) : 0}
      </dd>
    </dl>
  )
}

export default AverageRating;