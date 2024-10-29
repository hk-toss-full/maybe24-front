import { axiosInstance } from "../axios";

export const getReviewList = async (productId: number) => {
  const { data } = await axiosInstance({
    method: "GET",
    url: `/reviews/${productId}`,
  });
  return data;
};

export const addReview = async ({ productId, author, content, rating }) => {
  const { data } = await axiosInstance({
    method: "POST",
    url: `/reviews/${productId}`,
    data: { productId, author, content, rating },
  });
  return data;
};

export const updateReview = async ({
  reviewId,
  productId,
  author,
  content,
  rating,
}) => {
  const { data } = await axiosInstance({
    method: "PUT",
    url: `/reviews/${reviewId}`,
    data: { productId, author, content, rating },
  });
  return data;
};

export const deleteReview = async (reviewId: number) => {
  const { data } = await axiosInstance({
    method: "DELETE",
    url: `/reviews/${reviewId}`,
  });
  return data;
};
