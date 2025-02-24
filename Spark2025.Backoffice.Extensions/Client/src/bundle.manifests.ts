import { manifests as entrypoints } from './entrypoints/manifest';
import { manifests as blockManifests } from './blocks/manifests.js';
import { manifests as tiptapManifests } from './tiptap/manifests.js';

// Job of the bundle is to collate all the manifests from different parts of the extension and load other manifests
// We load this bundle from umbraco-package.json
export const manifests: Array<UmbExtensionManifest> = [
  ...entrypoints,
  ...blockManifests,
  ...tiptapManifests,
];
