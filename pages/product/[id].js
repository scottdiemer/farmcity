import Image from "next/image";
import { getProducts, getProduct } from "../../lib/products";
import { gql } from "../../lib/gql";
import { fetchJson } from "../../lib/fetchJson";
import Layout from "../../components/Layout";

export default function ProductPage({ product }) {
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
  const query = `
  {
    product(where: {id: ${id}}) {
      name
      description {
        document
      }
      productImage {
        url
        height
        width
      }
      prices {
        variant {
          variant {
            name
          }
          value
        }
        price
      }
      sale
      saleStart
      saleEnd
      salePrices {
        variant {
          variant {
            name
          }
          value
        }
        price
      }
    }
    }
  }`;
  console.log(query);
  const product = await fetchJson(
    "http://localhost:3000/api/graphql",
    JSON.stringify(query)
  );

  return {
    props: {
      product: product,
    },
    revalidate: parseInt(process.env.REVALIDATE_SECONDS),
  };
}
