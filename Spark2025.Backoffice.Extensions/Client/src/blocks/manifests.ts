import { ManifestBlockEditorCustomView } from '@umbraco-cms/backoffice/block-custom-view';

export const manifests: ManifestBlockEditorCustomView[] = [
    {
        type: 'blockEditorCustomView',
        alias: 'powerart.block',
        name: 'Powerart Block',
        element: () => import('./powerart.block.js'),
        forBlockEditor: 'block-rte',
        forContentTypeAlias: 'powerArt',
    }
];