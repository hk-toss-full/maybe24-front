import { gql } from "@apollo/client";

export const getAllProdcuts = gql`
  query GetAllProducts {
    getAllProducts {
      productId
      productImgUrl
      title
      place
      discounts {
        discountType
        discountRate
      }
      dateList {
        date
      }
    }
  }
`;
