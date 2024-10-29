import { gql } from "@apollo/client";

export const getTop3ByCategoryOrderByViewCnt = gql`
  query GetTop3ByCategoryOrderByViewCnt($category: Category!) {
    getTop3ByCategoryOrderByViewCnt(category: $category) {
      productId
      title
      place
      category
      productImgUrl
      dateList {
        date
      }
    }
  }
`;
