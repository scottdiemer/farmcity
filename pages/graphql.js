import gql from "graphql-tag";
import { useGQLQuery } from "../lib/useGQLQuery";

const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
    }
  }
`;

const GET_COUNTRY = gql`
  query($code: ID!) {
    country(code: $code) {
      name
    }
  }
`;

export async function getStaticProps() {
  const { data, isLoading, error } = await useGQLQuery(
    "countries",
    GET_COUNTRIES
  );
  return {
    props: { data, isLoading, error },
  };
}

function Test({ data, isLoading, error }) {
  const { countries } = data;
  console.log(countries);

  isLoading ? <div>Loading...</div> : "";
  error ? <div>Oops... Something went wrong!</div> : "";

  return (
    <div>
      {countries.map((country) => {
        return <div key={country.name}>{country.name}</div>;
      })}
    </div>
  );
}

export default Test;
