import { useState } from "react";
import productData from "../../data/product.json";
import {
  getReviewList,
  addReview,
  updateReview,
} from "../../api/query/ReviewApi";

interface productData {
  productId: number;
  board: any;
  setBoard: (board: any) => void;
  addPost: () => void;
  updatePost: (reviewId: number) => void;
}

const Add = ({ board, setBoard, addPost, updatePost }: productData) => {
  const handleInput = (e) => {
    const { name, value } = e.target;
    setBoard({ ...board, [name]: value });
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
        <hr />
        <div className="flex flex-row cursor-pointer text-[30px] m-[10px] -translate-y-1">
          {[...Array(board.rating)].map((_, i) => (
            <div key={i} onClick={() => setBoard({ ...board, rating: i + 1 })}>
              ★
            </div>
          ))}
          {[...Array(5 - board.rating)].map((_, i) => (
            <div
              key={i}
              onClick={() =>
                setBoard({ ...board, rating: board.rating + i + 1 })
              }
            >
              ☆
            </div>
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
          <button onClick={() => updatePost(board.reviewId)}>UPDATE</button>
        </div>
      </div>
      <div className="mt-[30px]"></div>
    </div>
  );
};

export default Add;
