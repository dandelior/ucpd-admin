import { CollectionConfig } from 'payload/types';
import formatSlug from '../utilities/formatSlug';

const AskThePastor: CollectionConfig = {
    slug: 'askthepastor',
    labels: {
        singular: 'Pregunta al pastor',
        plural: 'Preguntas al pastor'
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            label: 'Titulo/Pregunta',
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
            name: 'content',
            type: 'richText',
            label: 'Contenido/Respuesta',
            required: true,
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

export default AskThePastor;