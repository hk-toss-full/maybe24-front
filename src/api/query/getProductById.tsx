import { gql } from "@apollo/client";


export const GET_PRODUCT_BY_ID = gql`
  query GetProductById($productId: ID!){
    getProductById(productId: $productId){
      productId
      title
      description
      place
      productImgUrl
    }
  }
`;