export const getProducts = async () =>
  await (
    await fetch("http://localhost:5000/api/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
         query {
            products {
              id
              name
              description {
                document
              }
              productImage {
                url
              }
            }
          }
      `,
      }),
    })
  ).json();
