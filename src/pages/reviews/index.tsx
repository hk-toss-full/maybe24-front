import ReviewList from "../../components/reviews/ReviewList";
import { useParams } from "react-router-dom";

const ReviewsPage: React.FC = () => {
  const { productId } = useParams<{productId: string}>();


  // const parseProductId = parseInt(productId!);

  return (
      <div>
        <ReviewList productId={Number(productId)} />
      </div>
  )
}

export default ReviewsPage;