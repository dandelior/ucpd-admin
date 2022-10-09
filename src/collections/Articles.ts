import { CollectionConfig } from "payload/types";
import formatSlug from "../utilities/formatSlug";

const Articles: CollectionConfig = {
  slug: "articles",
  labels: {
    singular: "Artículo",
    plural: "Artículos",
  },
  access: {
    read: (): boolean => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Título",
      required: true,
    },
    {
      type: "row",
      fields: [
        {
          name: "date",
          type: "date",
          label: "Fecha",
          defaultValue: Date,
          required: true,
        },
        {
          name: "author",
          type: "relationship",
          relationTo: "authors",
          label: "Autor",
        },
      ],
    },
    {
      name: "featured_image",
      type: "upload",
      label: "Imagen destacada",
      relationTo: "imagenes",
      // unique: true,
      required: true,
    },
    {
      name: "content",
      type: "richText",
      label: "Contenido",
      required: true,
    },
    {
      name: "themes",
      type: "relationship",
      label: "Tema del artículo",
      relationTo: "themes",
      hasMany: false,
      admin: {
        position: "sidebar",
        style: {
          marginTop: "30px",
        },
      },
    },
    {
      name: "description",
      type: "textarea",
      label: "Descripción",
      maxLength: 180,
      admin: {
        position: "sidebar",
        description: ({ value }) => {
          return value?.length + " / 180 caracteres.";
        },
      },
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      admin: {
        position: "sidebar",
        description:
          "Dejar en blanco para que se genere automáticamente al guardar",
      },
      hooks: {
        beforeValidate: [formatSlug("title")],
      },
    },
  ],
  admin: {
    useAsTitle: "title",
  },
  versions: {
    drafts: {
      autosave: true,
    },
  },
};

export default Articles;
