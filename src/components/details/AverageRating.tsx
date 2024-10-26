import axios from "axios";
import { useEffect, useState } from "react";

interface AverageRating{
  average: number;
}

interface AverageRatingProps {
  productId: number;
}

const AverageRating = ({ productId }: AverageRatingProps) => {
  const [averageRating, setAverageRating] = useState<number | null>(null);

  const getAverageRating = async (productId: number) => {
    try {
      const response = await axios.get<AverageRating>(`http://localhost:9000/reviews/${productId}/average-rating`);
      setAverageRating(response.data.average);
    } catch (error) {
      console.error('Error fetching rating average:', error);
      setAverageRating(null);
    }
  };

  useEffect(() => {
    getAverageRating(productId)}
  ,[productId]);

  return(
    <dl className="flex align-items justify-content pt-[50px]">
      <dt className="mr-[10px] mb-[45px]">별점</dt> 
      <dd>
        {averageRating !== null ? averageRating.toFixed(3) : 0}
      </dd>
    </dl>
  )
}

export default AverageRating;