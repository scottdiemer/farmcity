import { ALL_PRODUCTS } from "./queries";
import fetchJson from "./fetchJson";

export const endpoint = process.env.GRAPHQL_ENDPOINT;

export const getProducts = async () => await fetchJson(endpoint, ALL_PRODUCTS);
