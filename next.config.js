module.exports = {
  env: {
    GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
    SERVER_URL: process.env.SERVER_URL,
    REVALIDATE_SECONDS: process.env.REVALIDATE_SECONDS,
  },
  images: {
    domains: ["i.imgur.com", "localhost"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
