import { QueryClient, dehydrate, useQuery } from "react-query";
import { getProducts } from "../lib/fetchProducts";

export default function DisplayProducts() {
  const { data, isLoading, error } = useQuery("products", getProducts);
  console.log(data);

  !data && <div>No data!</div>;
  isLoading && <div>Loading...</div>;
  error && <div>Oops... Something went wrong!</div>;

  return <div>Testing</div>;
}
