import { dehydrate, QueryClient, useQuery } from "react-query";
import { ProductList } from "../components/ProductList";
import { getEnabledProducts } from "../lib/products";
import { PageTitleStyle, calcContainerHeight } from "../components/Styles";
import Layout from "../components/Layout";
import Title from "../components/Title";

export default function Products() {
  const { data: products } = useQuery("products", getEnabledProducts);
  const height = calcContainerHeight(products);

  return (
    <Layout title="Products | Farm City Feed Stores">
      <section className={`bg-tan/25 overflow-hidden ${height}`.trim()}>
        <Title
          className={PageTitleStyle.concat(" text-shadow")}
          title="Products"
        />
        {!products || products.length === 0 ? (
          <p className="text-center">No products available at this time...</p>
        ) : (
          <ProductList products={products} />
        )}
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
