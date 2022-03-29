import { gql } from "./gql";

export const ALL_PRODUCTS = gql`
  {
    products {
      id
      name
      summary
      description {
        document
      }
      status
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

export const PRODUCT_BY_ID = (id) => gql`
  {
    product(where: {id: ${id}}) {
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
  }`;
