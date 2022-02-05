import { dehydrate, QueryClient, useQuery } from "react-query";
import { getProducts } from "../lib/products2";
import Title from "../components/Title";
import SlideInWhenVisible from "../components/SlideInWhenVisible";
import Layout from "../components/Layout";
import Card from "../components/Card";

export default function Products({ serverUrl }) {
  const { data, error } = useQuery("products", getProducts);
  !data && <p>No data!</p>;
  error && <p>Oops something went wrong!</p>;

  return (
    <Layout>
      <section className="bg-tan/25 overflow-hidden">
        <Title className="text-shadow" title="Products" />
        <div className="container p-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.data.products.map((product, index) => {
            return (
              <SlideInWhenVisible number={index} key={index}>
                <Card
                  key={product.id}
                  title={product.name}
                  description={product.description.document[0].children[0].text}
                  imageUrl={serverUrl + product.productImage.url}
                />
              </SlideInWhenVisible>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("products", getProducts);

  return {
    props: {
      serverUrl: process.env.SERVER_URL,
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: parseInt(process.env.REVALIDATE_SECONDS),
  };
}
