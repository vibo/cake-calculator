import {Element as PolymerElement} from '@polymer/polymer/polymer-element';

export class App extends PolymerElement {
    public title = 'Cake calculator';

    static get template() {
        return `
            <h1>[[title]]</h1>
        `;
    }
}

customElements.define('cc-app', App);