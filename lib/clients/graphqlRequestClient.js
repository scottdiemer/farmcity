import { GraphQLClient } from "graphql-request";

const graphqlRequestClient = new GraphQLClient(process.env.GRAPHQL_ENDPOINT);

export default graphqlRequestClient;
