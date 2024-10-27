import { useState, useEffect } from "react";
import axios from "axios";
import FormattingDate from "./FormattingDate";
import ReviewFormModal from "./ReviewFormModal";


const getReviewList = async(productId: number) => {
  const {data} = await axios({
    method: "GET",
    url: `http://localhost:9000/${productId}/reviews`
  });
  return data;
} 


interface Review{
  reviewId: number;
  content: string;
  author: string;
  createdAt: string;
  rating: number;
  productId?: number;
}

interface ReviewListProps {
  productId?: number;
}

const ReviewList: React.FC<ReviewListProps> = ({productId}) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
      if (productId) {
        const loadReviews = async () => {
          try {
            const reviewsData = await getReviewList(productId);
            setReviews(reviewsData);
          } catch (err) {
            setError('리뷰를 불러오는 데 오류가 발생했습니다.');
          } finally {
            setLoading(false);
          }
        };
        loadReviews();
      }
    }, [productId]);


const openModal = () => {
  console.log("모달 열기 버튼 클릭");
  setIsModalOpen(true);
};
const closeModal = () => setIsModalOpen(false);

  return(
    <div className="mt-[70px] mr-[100px] ml-[100px]">
      <div className="flex flex-row space-x-[1050px]">
      <h1 className="text-[25px] font-bold mb-[5px]">관람후기</h1>
      <button onClick={openModal} className="border-solid border-black border-[1px] w-[150px] h-[30px]">관람 후기 등록</button>
      <ReviewFormModal isOpen={isModalOpen} onClose={closeModal}/>
      </div>
      <hr className="border-black border-[1px]"/>
      <ul>
        {reviews.map((review) => (
        <li key={review.reviewId} className="border-b-[1px] border-gray-300 mt-[10px] pb-[10px] font-light">
          <span className="mb-[10px]">
            {review.author} <FormattingDate createdAt={review.createdAt}/> </span>
            <span>
              {'★'.repeat(review.rating)}{'☆'.
            repeat(5- review.rating)}
          </span>
          <span>
          {review.content}
          </span>
        </li>
        ))}
        
      </ul>
    </div>
  );
}

export default ReviewList;