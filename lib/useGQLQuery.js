import { useQuery } from "react-query";
import { request, GraphQLClient } from "graphql-request";

export const useGQLQuery = (key, query, variables, config = {}) => {
  const endpoint = "https://countries.trevorblades.com/";

  // const graphQLClient = new GraphQLClient(endpoint);

  // const fetchData = async () => await graphQLClient.request(query, variables);
  const fetchData = async () => await request(endpoint, query, variables);

  return useQuery(key, fetchData, config);
};
