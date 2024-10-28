import axios from "axios";

export const getReviewList = async(productId: number) => {
  const {data} = await axios({
    method: "GET",
    url: `http://localhost:9000/reviews/${productId}`
  });
  return data;
} 

export const addReview = async( {productId ,author, content, rating}) => {
  const {data} = await axios({
    method: "POST",
    url: `http://localhost:9000/reviews/${productId}`,
    data: {productId, author, content, rating}
  });
  return data;
} 

export const updateReview = async({reviewId, productId, author, content, rating}) => {
  const {data} = await axios({
    method: "PUT",
    url: `http://localhost:9000/reviews/${reviewId}`,
    data: { productId, author, content, rating}
  });
  return data;
} 

export const deleteReview = async(reviewId: number) => {
  const {data} = await axios({
    method: "DELETE",
    url: `http://localhost:9000/reviews/${reviewId}`
  });
  return data;
} 