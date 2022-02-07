import { gql } from "./gql";

export const ALL_PRODUCTS = gql`
  {
    products {
      id
      name
      description {
        document
      }
      productImage {
        url
      }
    }
  }
`;
