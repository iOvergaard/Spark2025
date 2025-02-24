import { UmbTiptapToolbarElementApiBase } from '@umbraco-cms/backoffice/tiptap';
import type { Editor } from '@umbraco-cms/backoffice/external/tiptap';

export default class UmbTiptapToolbarButtonExtensionApi extends UmbTiptapToolbarElementApiBase {
    override execute(editor?: Editor) {
        editor?.chain().focus().insertContent('Hello Spark!').run();
    }
}