import './plugins/jQuery.js';
import './plugins/knockout.js';

import { documentGroups } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const model = {
        documentGroups: ko.observableArray(documentGroups.map(
            group => new DocumentGroupModel(group))
        ),
        dropTo() {

        },
        beforeMove() {
            console.log(1);
        }
    }

    ko.applyBindings(model, document.querySelector('#app'));
})

class DocumentGroupModel {
    /**
     * @public
     * @type {number}
     */
    id;

    /**
     * @public
     * @type {string}
     */
    name = '';

    /**
     * @public
     * @type {DocmentListModel}
     */
    documentList;

    constructor(data) {
        this.id = data.id;
        this.name = data.name || '';
        this.documentList = Array.isArray(data.documents)
            ? DocmentListModel.fromArray(data.documents)
            : new DocmentListModel();
    }
}

class DocmentListModel {
    /**
     * @public
     * @type {Array<DocumentModel>}
     */
    items;

    constructor(data) {
        this.items = data ? ko.observableArray(data) : [];
    }
}

DocmentListModel.fromArray = function(data) {
    return new DocmentListModel(data.map(doc => new DocumentModel(doc)));
}

class DocumentModel {
    /**
     * @public
     * @type {number}
     */
    id;

    /**
     * @public
     * @type {string}
     */
    name = '';

    constructor(data) {
        this.id = data.id;
        this.name = data.name || '';
    }
}
