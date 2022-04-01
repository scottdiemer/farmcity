import Layout from "../components/Layout";
import { ALL_PRODUCTS, PRODUCT_BY_ID } from "../lib/queries";

export default function TestPage() {
  console.log(PRODUCT_BY_ID("ckzjafgr01182pw0dtwjh7fz2"));
  return (
    <Layout>
      <h1>Testing</h1>
    </Layout>
  );
}
