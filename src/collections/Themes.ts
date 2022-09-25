import { CollectionConfig } from "payload/types";
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
  ],
  admin: {
    useAsTitle: "name",
  },
};

export default Themes;
