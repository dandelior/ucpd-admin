import { CollectionConfig } from "payload/types";

const Media: CollectionConfig = {
  slug: "imagenes",
  labels: {
    singular: "imagen",
    plural: "Imágenes",
  },
  access: {
    read: (): boolean => true,
  },
  upload: {
    staticURL: "/media",
    staticDir: "media",
    imageSizes: [
      {
        name: "og",
        width: 952,
        height: 500,
        crop: "centre",
      },
      {
        name: "thumbnail",
        width: 640,
        height: null,
        crop: "centre",
      },
      {
        name: "card",
        width: 1024,
        height: null,
        crop: "centre",
      },
      {
        name: "tablet",
        width: 1920,
        height: null,
        crop: "centre",
      },
    ],
    // mimeTypes: ['image/jpeg', 'image/svg+xml', 'image/webp', 'image/png'],
  },
  fields: [],
};

export default Media;
