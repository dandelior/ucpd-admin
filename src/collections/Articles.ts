import { CollectionConfig } from 'payload/types';
import formatSlug from '../utilities/formatSlug';

const Articles: CollectionConfig = {
    slug: 'articles',
    labels: {
      singular: 'Artículo',
      plural: 'Artículos',
    },
    fields: [
      {
        name: 'title',
        type: 'text',
        label: 'Título',
        required: true,
      },
      {
        type: 'row',
        fields: [
          {
            name: 'date',
            type: 'date',
            label: 'Fecha',
            defaultValue: Date,
            required: true,
          },
          {
            name: 'author',
            type: 'relationship',
            relationTo: 'authors',
            label: 'Autor',
          },
        ]
      },
      {
        name: 'featured_image',
        type: 'upload',
        label: 'Imagen destacada',
        relationTo: 'imagenes',
        unique: true,
        required: true,
      },
      {
        name: 'content',
        type: 'richText',
        label: 'Contenido',
        required: true,
      },
      {
        name: 'themes',
        type: 'relationship',
        relationTo: 'themes',
        label: 'Tema del artículo',
        admin: {
          position: 'sidebar',
        },
      },
      {
        name: 'description',
        type: 'textarea',
        label: 'Descripción',
        maxLength: 180,
        admin: {
          position: 'sidebar',
          description: 'Máximo 180 caracteres',
        },
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
      },
    ],
    admin: {
      useAsTitle: 'title',
    },
    versions: {
      drafts: {
        autosave: true,
      }
    },
};

export default Articles;