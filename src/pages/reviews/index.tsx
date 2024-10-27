import ReviewList from "../../components/reviews/ReviewList";
import { useParams } from "react-router-dom";

const ReviewsPage: React.FC = () => {
  const { productId } = useParams<{productId: string}>();

  console.log("Received productId:", productId);


  const parseProductId = productId? parseInt(productId, 10): undefined;

  return (
      <div>
        <ReviewList productId={parseProductId} />
      </div>
  )
}

export default ReviewsPage;