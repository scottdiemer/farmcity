import Image from "next/image";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { getProducts } from "../lib/products";
import { Card, Description, Price } from "../components/Card";
import { GridContainer } from "../components/GridContainer";
import Layout from "../components/Layout";
import Title from "../components/Title";
import SlideInWhenVisible from "../components/SlideInWhenVisible";

export default function Products({ serverUrl }) {
  const {
    data: {
      data: { products },
    },
    error,
  } = useQuery("products", getProducts);

  !products && <p>No products!</p>;
  error && <p>Oops something went wrong!</p>;

  return (
    <Layout>
      <section className="bg-tan/25 overflow-hidden">
        <Title
          className="mx-auto p-4 text-3xl text-center text-shadow"
          title="Products"
        />
        <GridContainer>
          {products.map((product, index) => {
            const { id, name, description, productImage } = product;
            const { url } = productImage;

            return (
              <SlideInWhenVisible number={index} key={id}>
                <Card>
                  <div className="w-48 m-8 mx-auto">
                    <Image
                      src={serverUrl.concat(url)}
                      width={250}
                      height={250}
                      layout="intrinsic"
                      objectFit="contain"
                    />
                  </div>
                  <div className="p-4">
                    <Title
                      className="text-2xl text-center text-olive-drab-camouflage"
                      title={name}
                    />
                    <Description
                      className="m-4 prose line-clamp-4"
                      description={description.document}
                    />
                    <Price className="py-2 text-med flex justify-around">
                      <span className="line-through text-gray-400 text-left">
                        Was: $7.95
                      </span>
                      <span className="font-semibold text-red-600 text-right">
                        Sale: $5.95
                      </span>
                    </Price>
                  </div>
                </Card>
              </SlideInWhenVisible>
            );
          })}
        </GridContainer>
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
