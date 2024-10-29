import { gql } from "@apollo/client";

export const GET_DISCOUNT_BY_PRODUCT_ID = gql`
  query GetDiscountByProductId($productId: ID!){
    getDiscountByProductId(productId: $productId){
      discountType
      discountRate
      productId
    }
  }
`;

// export default function getDiscountsByProductId(productId) {
//   return useQuery(GET_DISCOUNT_BY_PRODUCT_ID, 
//     {variables: {productId}});
// }