import $ from './plugins/jQuery.js';
import ko from './plugins/knockout.js';

import { documentGroups } from './data.js';

import {
	toggleDocumentGroupEl,
	hideDocumentGroupEl,
	isDocumentGroupElHidden,
} from './helpers/DOM';

import {
	DocumentModel,
	DocumentGroupModel,
	DocmentListModel,
} from './models/index';

document.addEventListener('DOMContentLoaded', () => {

	const model = {
		DROP_DURATION: 200,

		documentGroups: ko.observableArray(documentGroups.map(
			group => new DocumentGroupModel(group))
		),
		beforeMove(arg, event, ctx) {
			/**
			 * @see {@link afterMove}
			 */
			const groupEl = 0 in ctx.item ? ctx.item[0] : undefined;
			arg.item.__hidden = groupEl && isDocumentGroupElHidden(groupEl);
		},
		afterMove({ item, targetIndex, sourceParentNode }, event, ctx) {
			// лологирует перемещение элемента
			console.groupCollapsed(`After move '${item.constructor.name}'`);
			console.log('Moved item:', item);
			console.groupEnd();

			/**
			 * @description предотвращает схлопывание при перемещении элемента
			 */
			if (targetIndex in sourceParentNode.children) {
				const groupEl = sourceParentNode.children[targetIndex];
				if (item.__hidden && groupEl) hideDocumentGroupEl(groupEl, 0);
			}
			delete item.__hidden;
		}
	}
	ko.applyBindings(model, document.querySelector('#app'));

	document.addEventListener('click', event => {
		/** @type {HTMLElement|undefined} */
		const btnEl = event.target.closest('.document-group__collapse');
		if (!btnEl) return;

		/** @type {HTMLElement|undefined} */
		const groupEl = btnEl.closest('.document-group');
		if (!groupEl) return;

		toggleDocumentGroupEl(groupEl);
	})
})
