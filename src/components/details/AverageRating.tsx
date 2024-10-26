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
    <p>별점 평균 : {averageRating !== null ? averageRating.toFixed(3) : 0}</p>
  )
}

export default AverageRating;