import { useState } from "react";
import axios from "axios";
import productData from "../../data/product.json"

interface productData{
  productId: number;
  updateReviewList: ()=>void;
}

const getReviewsByProductId = async(productId: number) => {
  const {data} = await axios({
    method: "GET",
    url: `http://localhost:9000/${productId}/reviews`
  });
  return data;
} 

const addReview = async( {productId ,author, content, rating}) => {
  const {data} = await axios({
    method: "POST",
    url: `http://localhost:9000/${productId}/reviews`,
    data: {productId, author, content, rating}
  });
  return data;
} 

const updateReview = async({reviewId, productId, author, content, rating}) => {
  const {data} = await axios({
    method: "PUT",
    url: `http://localhost:9000/reviews/${reviewId}`,
    data: { productId, author, content, rating}
  });
  return data;
} 

const Add = ({ productId, updateReviewList }:productData) => {
  const [board, setBoard] = useState({author: "",content: "", rating: 0 });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setBoard({ ...board, [name]: value });
  };

  const addPost = async () => {
    const data = await addReview({productId, author: board.author, content: board.content, rating: board.rating});
    setBoard({ author: "" ,content: "", rating: 0 });
    updateReviewList();
  };


  return (
    <div>
      <div className="flex flex-col align-center mt-[10px]">
      <input
          className="min-h-[25px] p-[10px] rounded"
          type="text"
          value={board.author}
          name="author"
          onChange={handleInput}
          placeholder="작성자"
        />
        <hr/>
        <div className="flex flex-row cursor-pointer text-[30px] m-[10px] -translate-y-1">
          {[...Array(board.rating)].map((_, i)=>(
            <div key={i} onClick={() => setBoard({...board, rating:i + 1})}>★</div>
          ))}
          {[...Array(5 - board.rating)].map((_, i) => (
            <div key={i} onClick={() => setBoard({...board, rating:board.rating + i + 1})}>☆</div>
          ))}
        </div>
        <hr />
        <textarea
          className="min-h-[100px] p-[10px] rounded"
          name="content"
          value={board.content}
          onChange={handleInput}
          placeholder="내용"
        ></textarea>
        <br />
        <div className="flex justify-center">
          <button
            className="w-[100px] h-[35px] font-semibold"
            onClick={addPost}
          >
            ADD
          </button>
        </div>
      </div>
      <div className="mt-[30px]">
      </div>
    </div>
  );
};

export default Add;