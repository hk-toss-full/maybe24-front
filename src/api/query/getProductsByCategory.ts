import { gql } from "@apollo/client";

export const getProductsByCategory = gql`
  query GetProductsByCategory($category: Category!) {
    getProductsByCategory(category: $category) {
      productImgUrl
      title
    }
  }
`;
