import { buildConfig } from "payload/config";
import path from "path";

import Articles from "./src/collections/Articles";
import Themes from "./src/collections/Themes";

import AskThePastor from "./src/collections/AskThePastor";

import Media from "./src/collections/Media";
import Users from "./src/collections/Users";
import Series from "./src/collections/Series";
import Videos from "./src/collections/Videos";
import Authors from "./src/collections/Authors";

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_BASE_DNS,
  rateLimit: {
    trustProxy: true,
  },
  admin: {
    user: Users.slug,
  },
  collections: [
    Articles,
    Themes,
    AskThePastor,
    Videos,
    Series,
    Authors,
    Media,
    Users,
  ],
  upload: {
    limits: {
      fileSize: 15000000,
},
  },
  localization: {
    locales: ["en", "es"],
    defaultLocale: "es",
    fallback: true,
  },
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  cors: ["http://localhost:3000", "http://localhost:3001"],
});
