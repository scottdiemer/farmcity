import { dehydrate, QueryClient, useQuery } from "react-query";
import { getProducts } from "../lib/products";
import Layout from "../components/Layout";

export default function Products() {
  const {
    data: { products },
    error,
  } = useQuery("products", getProducts);

  console.log("document: ", products.document?.text);

  !products && <p>No data!</p>;
  error && <p>Oops something went wrong!</p>;

  return (
    <Layout>
      <section>
        <h2 className="text-lg">Products</h2>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <p>{product.name}</p>
              {/* <p>{product.document?.text}</p> */}
            </div>
          );
        })}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("products", getProducts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
