import { html, customElement, LitElement, property, css } from '@umbraco-cms/backoffice/external/lit';
import { UmbElementMixin } from '@umbraco-cms/backoffice/element-api';
import type { UmbBlockEditorCustomViewElement } from '@umbraco-cms/backoffice/block-custom-view';
import type { UmbBlockDataType } from '@umbraco-cms/backoffice/block';

@customElement('powerart-block-custom-view')
export class PowerartBlockCustomView extends UmbElementMixin(LitElement) implements UmbBlockEditorCustomViewElement {

    @property({ attribute: false })
    content?: UmbBlockDataType;

    @property({ attribute: false })
    settings?: UmbBlockDataType;

    override render() {
        return html`
            <h3>Power Art</h3>
            <p>Type: ${this.settings?.textType}</p>
            <p>Text: ${this.content?.text}</p>
        `;
    }

    static override styles = [
        css`
            :host {
                display: block;
                height: 100%;
                box-sizing: border-box;
                background-color: #dddddd;
                border-radius: 9px;
                padding: 12px;
            }
        `,
    ];
}

export default PowerartBlockCustomView;