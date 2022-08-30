import { CollectionConfig } from 'payload/types';

const Authors: CollectionConfig = {
    slug: 'authors',
    labels: {
        singular: 'Autor',
        plural: 'Autores',
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            label: 'Nombre',
            required: true,
        },
        {
            name: 'bio',
            type: 'textarea',
            label: 'Mini bio',
            maxLength: 400,
            required: true,
            admin: {
                description: 'Máximo 400 carácteres',
            },
        },
        {
            name: 'thumbnail',
            type: 'upload',
            relationTo: 'imagenes',
            label: 'Foto/Avatar',
            unique: true,
            required: true,
        },
    ],
    admin: {
        useAsTitle: 'name',
    },
}

export default Authors;