import Image from "next/image";
import { ApiError } from "../lib/fetchJson";
import Layout from "../components/Layout";

export default function ProductPage() {
  return <Layout></Layout>;
}

export async function getStaticPaths() {
  return {
    paths: [],
  };
}

export async function getStaticProps() {
  return;
}
