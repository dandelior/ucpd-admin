import { CollectionConfig } from "payload/types";
import formatSlug from "../utilities/formatSlug";

const Series: CollectionConfig = {
  slug: "series",
  labels: {
    singular: "Serie de Videos",
    plural: "Series de Videos",
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
      name: "featured_image",
      type: "upload",
      label: "Imagen destacada",
      relationTo: "imagenes",
      unique: true,
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
  versions: {
    drafts: {
      autosave: true,
    },
  },
};

export default Series;
