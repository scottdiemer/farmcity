import { dehydrate, QueryClient, useQuery } from "react-query";
import Layout from "../components/Layout";
import { getSaleItems } from "../lib/products";
import { ProductList } from "../components/ProductList";

export default function Specials({ serverUrl }) {
  const { data: products, error } = useQuery("saleItems", getSaleItems);

  !products && <p>No products!</p>;
  error && <p>Oops something went wrong!</p>;

  return (
    <Layout>
      <ProductList products={products} />
    </Layout>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("saleItems", getSaleItems);

  return {
    props: {
      serverUrl: process.env.SERVER_URL,
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: parseInt(process.env.REVALIDATE_SECONDS),
  };
}
