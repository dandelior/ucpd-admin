import { CollectionConfig } from 'payload/types';

const Media: CollectionConfig = {
    slug: 'imagenes',
    labels: {
        singular: 'imagen',
        plural: 'Imágenes',
    },
    upload: {
        staticURL: '/media',
        staticDir: 'media',
        imageSizes: [
            {
                name: 'thumbnail',
                width: 400,
                height: 300,
                crop: 'centre',
            },
            {
                name: 'card',
                width: 768,
                height: 1024,
                crop: 'centre',
            },
            {
                name: 'tablet',
                width: 1024,
                height: null,
                crop: 'centre',
            },
        ],
        // mimeTypes: ['image/jpeg', 'image/svg+xml', 'image/webp', 'image/png'],
    },
    fields: [],
};

export default Media;