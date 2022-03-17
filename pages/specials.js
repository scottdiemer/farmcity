import { dehydrate, QueryClient, useQuery } from "react-query";
import Layout from "../components/Layout";
import { getSaleItems } from "../lib/products";
import { ProductList } from "../components/ProductList";
import { PageTitleStyle, calcContainerHeight } from "../components/Styles";
import MonthlySpecialDate from "../components/MonthlySpecialDate";
import Title from "../components/Title";

export default function Specials() {
  const { data: products } = useQuery("saleItems", getSaleItems);
  const height = calcContainerHeight(products);

  return (
    <Layout>
      <section className={`bg-tan/25 overflow-hidden ${height}`.trim()}>
        <Title
          className={PageTitleStyle.concat(" text-shadow")}
          title="Specials"
        />
        <MonthlySpecialDate className="text-center text-lg text-shadow mb-4 font-semibold" />
        {!products || products.length === 0 ? (
          <p className="text-center">
            Sorry! There&apos;s no specials available at this time...
          </p>
        ) : (
          <ProductList products={products} />
        )}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("saleItems", getSaleItems);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: parseInt(process.env.REVALIDATE_SECONDS),
  };
}
