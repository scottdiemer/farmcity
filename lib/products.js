import { ALL_PRODUCTS } from "./queries";
import fetchJson from "./fetchJson";

export const endpoint = process.env.GRAPHQL_ENDPOINT;

export const getProducts = async () => await fetchJson(endpoint, ALL_PRODUCTS);

export function onSaleCheck(sale, saleStart, saleEnd) {
  if (sale === "enable") {
    if (
      Date.now() >= Date.parse(saleStart) &&
      Date.now() <= Date.parse(saleEnd)
    ) {
      return true;
    }
  }
  return false;
}

export async function getSaleItems() {
  const res = await getProducts();

  const saleItems = res.data.products.filter((product) => {
    const { sale, saleStart, saleEnd } = product;
    const onSale = onSaleCheck(sale, saleStart, saleEnd);

    if (onSale) return product;
  });
  return saleItems;
}
