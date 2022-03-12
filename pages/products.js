import { dehydrate, QueryClient, useQuery } from "react-query";
import { ProductList } from "../components/ProductList";
import { getEnabledProducts } from "../lib/products";
import { PageTitleStyle } from "../components/Styles";
import Layout from "../components/Layout";
import Title from "../components/Title";

export default function Products() {
  const { data: products, error } = useQuery("products", getEnabledProducts);

  if (error) return <p>Oops something went wrong!</p>;

  return (
    <Layout>
      <section className="bg-tan/25 overflow-hidden">
        <Title
          className={PageTitleStyle.concat(" text-shadow")}
          title="Products"
        />
        {!products ? <p>No products!</p> : <ProductList products={products} />}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("products", getEnabledProducts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: parseInt(process.env.REVALIDATE_SECONDS),
  };
}
