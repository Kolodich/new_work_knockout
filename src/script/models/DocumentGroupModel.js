import DocmentListModel from "./DocmentListModel";

export default class DocumentGroupModel {
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
