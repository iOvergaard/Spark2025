import { ManifestTiptapToolbarExtension } from '@umbraco-cms/backoffice/tiptap';

export const manifests: ManifestTiptapToolbarExtension[] = [
    {
        kind: 'button',
        type: 'tiptapToolbarExtension',
        alias: 'tiptap.toolbar.button',
        name: 'Spark',
        js: () => import('./tiptap-button.extension.js'),
        meta: {
            alias: 'tiptap.toolbar.button',
            icon: 'icon-brush',
            label: 'Spark',
        }
    }
]