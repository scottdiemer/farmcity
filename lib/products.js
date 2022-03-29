import { ALL_PRODUCTS, PRODUCT_BY_ID } from "./queries";
import fetchJson from "./fetchJson";

export const endpoint = process.env.GRAPHQL_ENDPOINT;

export const getProducts = async () => await fetchJson(endpoint, ALL_PRODUCTS);

export const getProduct = async (id) =>
  await fetchJson(endpoint, PRODUCT_BY_ID(id));

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

export async function getEnabledProducts() {
  const res = await getProducts();

  const enabledProducts = res.data.products.filter((product) => {
    const { status, sale, saleStart, saleEnd } = product;
    if (status === "enable" && !onSaleCheck(sale, saleStart, saleEnd)) {
      return product;
    }
  });

  return enabledProducts;
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
