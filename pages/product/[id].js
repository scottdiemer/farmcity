import Image from "next/image";
import { gql } from "../../lib/gql";
import { getProducts, getProduct } from "../../lib/products";
import { dehydrate, QueryClient, useQuery } from "react-query";
import Layout from "../../components/Layout";

export default function ProductPage({ params: { id } }) {
  const { data: product } = useQuery("product", getProduct(id));
  return (
    <Layout>
      <h1>{product.name}</h1>
    </Layout>
  );
}

export async function getStaticPaths() {
  const products = await getProducts();
  return {
    paths: products.map((product) => ({
      params: { id: product.id.toString() },
    })),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params: { id } }) {
  const queryClient = new QueryClient();
  // const query =
  await queryClient.prefetchQuery("product", getProduct(id));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: parseInt(process.env.REVALIDATE_SECONDS),
  };
}
