import { CollectionConfig } from "payload/types";
import formatSlug from "../utilities/formatSlug";
import RichTexto from "../components/RichText";
import Content from "../blocks/Content";
import blockquote from "../fields/elements/blockquote";

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
      required: true,
    },
    {
      name: "content",
      type: "richText",
      label: "Contenido",
      required: true,
      admin: {
        elements: ["h2", "h3", "h4", blockquote, "link", "ol", "ul", "upload"],
      },
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
      maxLength: 220,
      admin: {
        position: "sidebar",
        description: ({ value }) => {
          const desc =
            value?.length !== undefined
              ? value.length + " / 220 caracteres."
              : "0 / 220 caracteres.";
          return desc;
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
