export function gql(myquery) {
  const gqlString = `${myquery}`;
  // remove any whitespace
  const query = gqlString.replace(/(\r\n|\n|\r)/gm, "");
  return JSON.stringify({ query });
}
