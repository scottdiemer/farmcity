export const fetchJson = async (endpoint, query) =>
  await (
    await fetch(endpoint, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: json.stringify({
        query: `
         query {
            ${query}
          }
      `,
      }),
    })
  ).json();
