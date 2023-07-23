import DocumentModel from "./DocumentModel";

export default class DocmentListModel {
    /**
     * @public
     * @type {Array<DocumentModel>}
     */
    items;

    constructor(data) {
        this.items = data ? ko.observableArray(data) : [];
    }
}

/**
 *
 * @param {Array} data
 * @returns {DocmentList}
 */
DocmentListModel.fromArray = function(data) {
    return new DocmentListModel(data.map(doc => new DocumentModel(doc)));
}
