import { CollectionConfig } from "payload/types";
import CategorySummary from "../components/CategorySummary";
import formatSlug from "../utilities/formatSlug";

const Themes: CollectionConfig = {
  slug: "themes",
  labels: {
    singular: "Tema",
    plural: "Temas",
  },
  access: {
    read: (): boolean => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      label: "Nombre",
      required: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      admin: {
        position: "sidebar",
        description:
          "Dejar en blanco para generarlo automáticamente al guardar",
      },
      hooks: {
        beforeValidate: [formatSlug("name")],
      },
    },
    {
      name: "summary",
      label: "Artículos asociados",
      // ui fields do not impact the database or api, and serve as placeholders for custom components in the admin panel
      type: "ui",
      admin: {
        position: "sidebar",
        components: {
          // this custom component will fetch the posts count for how many posts have this category
          Field: CategorySummary,
        },
      },
    },
  ],
  admin: {
    useAsTitle: "name",
  },
};

export default Themes;
