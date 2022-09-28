import { CollectionConfig, FieldHook } from "payload/types";
import formatSlug from "../utilities/formatSlug";

const AskThePastor: CollectionConfig = {
  slug: "askthepastor",
  labels: {
    singular: "Pregunta al pastor",
    plural: "Preguntas al pastor",
  },
  access: {
    read: (): boolean => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Titulo/Pregunta",
      required: true,
    },
    {
      name: "date",
      type: "date",
      label: "Fecha",
      defaultValue: Date,
      required: true,
    },
    {
      name: "featured_image",
      type: "upload",
      label: "Imagen destacada",
      relationTo: "imagenes",
      //   unique: true,
      required: true,
    },
    {
      name: "content",
      type: "richText",
      label: "Contenido/Respuesta",
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
        beforeValidate: [formatSlug("title")],
      },
    },
    {
      name: "num",
      label: "Número",
      type: "number",
      unique: true,
      admin: {
        position: "sidebar",
        readOnly: true,
      },
      hooks: {
        beforeChange: [
          (args) => {
            return (args.data.num = 222);
          },
        ],
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

export default AskThePastor;
