const withPreconstruct = require("@preconstruct/next");

const serverUrl = process.env.SERVER_URL || "http://localhost:5000";

const nextConfig = {
  env: {
    GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
    SERVER_URL: process.env.SERVER_URL,
    REVALIDATE_SECONDS: process.env.REVALIDATE_SECONDS,
    SESSION_SECRET: process.env.SESSION_SECRET,
  },
  images: {
    domains: ["i.imgur.com", "localhost"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  rewrites: () => [
    { source: "/api/graphql", destination: `${serverUrl}/api/graphql` },
  ],
  ignoreBuildErrors: true,
};

module.exports = withPreconstruct({ ...nextConfig });
