import { gql, request } from "graphql-request";

const endpoint = process.env.GRAPHQL_ENDPOINT;

const ALL_PRODUCTS = gql`
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

export const getProducts = async () => await request(endpoint, ALL_PRODUCTS);
