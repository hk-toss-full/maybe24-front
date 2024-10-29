import { gql } from "@apollo/client";


export const GET_ROUND_BY_ID = gql`
  query GetRoundtByProductId($productId: ID!){
    getRoundByProductId(productId: $productId){
      price
    }
  }
`;