import { buildConfig } from "payload/config";
import path from "path";

import Articles from "./collections/Articles";
import Themes from "./collections/Themes";

import AskThePastor from "./collections/AskThePastor";

import Media from "./collections/Media";
import Users from "./collections/Users";
import Series from "./collections/Series";
import Videos from "./collections/Videos";
import Authors from "./collections/Authors";

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
  cors: ["http://localhost:3000"],
});
