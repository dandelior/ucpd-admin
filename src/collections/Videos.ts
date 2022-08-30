import { CollectionConfig } from 'payload/types';
import formatSlug from '../utilities/formatSlug';

const Videos: CollectionConfig = {
    slug: 'videos',
    labels: {
        singular: 'Video',
        plural: 'Videos',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            label: 'Título',
            required: true,
        },
        {
            name: 'date',
            type: 'date',
            label: 'Fecha',
            defaultValue: Date,
            required: true,
        },
        {
            name: 'videoLink',
            type: 'text',
            label: 'Link del video',
            required: true,
        },
        {
            name: 'description',
            type: 'textarea',
            label: 'Descripción',
            required: true,
        },
        {
            name: 'serie',
            type: 'relationship',
            relationTo: 'series',
            label: 'Serie del Video',
            admin: {
                position: 'sidebar',
            }
        },
        {
            name: 'slug',
            label: 'Slug',
            type: 'text',
            admin: {
                position: 'sidebar',
                description: 'Dejar en blanco para generarlo automáticamente al guardar',
            },
            hooks: {
                beforeValidate: [
                    formatSlug('title'),
                ],
            },
        }
    ],
    admin: {
        useAsTitle: 'title',
    },
    versions: {
        drafts: {
          autosave: true,
        }
    },
}

export default Videos;