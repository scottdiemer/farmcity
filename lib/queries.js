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
        height
        width
      }
      prices {
        variant {
          variant {
            name
          }
          value
        }
        price
      }
      sale
      saleStart
      saleEnd
      salePrices {
        variant {
          variant {
            name
          }
          value
        }
        price
      }
    }
  }
`;
