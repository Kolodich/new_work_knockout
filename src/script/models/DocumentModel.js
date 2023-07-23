export default class DocumentModel {
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
