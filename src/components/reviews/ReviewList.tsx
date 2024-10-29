import { useState, useEffect } from "react";
import FormattingDate from "./FormattingDate";
import Add from "./Add";
import { useNavigate } from "react-router-dom";
import { getReviewList, deleteReview, updateReview, addReview } from "../api/ReviewApi"

interface Review{
  reviewId: number;
  content: string;
  author: string;
  createdAt: string;
  rating: number;
  productId?: number;
}

const ReviewList: React.FC<Review> = ({productId}) => {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [board, setBoard] = useState({author: "",content: "", rating: 0 });

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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


    const updateReviewList = async()=>{
      const data = await getReviewList(productId!)
      setReviews(data);
    }

    
  const addPost = async () => {
    const data = await addReview({productId, ...board});
    setBoard({ author: "" ,content: "", rating: 0 });
    await updateReviewList();
  };

    const updatePost = async (reviewId: number) => {
      await updateReview({reviewId, productId, 
        author: board.author , content: board.content, rating: board.rating});
      setBoard({ author: "", content: "", rating: 0 });
      updateReviewList();
    }

    const deletePost = async (reviewId: number) => {
      await deleteReview(reviewId);
      navigate(`/reviews/${productId}`);
      updateReviewList();
    };

    const openPost = (review: Review) => {
      setBoard({...review})
    }

  return(
    <div className="mt-[70px] mr-[100px] ml-[100px]">
      <div className="flex flex-row space-x-[1050px]">
        <h1 className="text-[25px] font-bold mb-[5px]">관람후기</h1>
      </div>
      <hr className="border-black border-[1px]"/>
      <Add board={board} setBoard={setBoard} addPost={addPost} updatePost={updatePost}/>
      <ul>
        {reviews.map((review) => (
        <li key={review.reviewId} className="border-b-[1px] border-gray-300 mt-[10px] pb-[10px]">
          <div className="flex flex-row gap-5">
            {review.author} {review.createdAt}
            <button onClick={() => deletePost(review.reviewId)} className="border-black border-2 w-[60px]">delete</button>
            <button onClick={() => openPost(review)}  className="border-black border-2 w-[60px]">update</button>
          </div>
            <span>
              {'★'.repeat(review.rating)}{'☆'.
            repeat(5- review.rating)}
          </span>
          <br/>
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