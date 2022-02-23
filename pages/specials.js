import { dehydrate, QueryClient, useQuery } from "react-query";
import Layout from "../components/Layout";
import { getSaleItems } from "../lib/products";
import { ProductList } from "../components/ProductList";
import { PageTitleStyle } from "../components/Styles";
import Title from "../components/Title";

export default function Specials() {
  const { data: products, error } = useQuery("saleItems", getSaleItems);

  !products && <p>No products!</p>;
  error && <p>Oops something went wrong!</p>;

  return (
    <Layout>
      <section className="bg-tan/25 overflow-hidden">
        <Title
          className={PageTitleStyle.concat(" text-shadow")}
          title="Specials"
        />
        <ProductList products={products} />
      </section>{" "}
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
