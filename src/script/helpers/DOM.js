import $ from '../plugins/jQuery.js';

const SLIDE_DURATION = 200;

/**
 * @param {HTMLElement} groupEl
 */
export function toggleDocumentGroupEl(groupEl, duration = SLIDE_DURATION) {
	if (isDocumentGroupElHidden(groupEl)) showDocumentGroupEl(groupEl, duration);
	else hideDocumentGroupEl(groupEl, duration);
}

/**
 * @param {HTMLElement} groupEl
 */
export function showDocumentGroupEl(groupEl, duration = SLIDE_DURATION) {
	const btnEl = groupEl.querySelector('.document-group__collapse');
	const listEl = groupEl.querySelector('.document-group__list');

	btnEl.classList.remove('document-group__collapse--active');
	$(listEl).slideDown(duration);
}

/**
 * @param {HTMLElement} groupEl
 */
export function hideDocumentGroupEl(groupEl, duration = SLIDE_DURATION) {
	const btnEl = groupEl.querySelector('.document-group__collapse');
	const listEl = groupEl.querySelector('.document-group__list');

	btnEl.classList.add('document-group__collapse--active');
	$(listEl).slideUp(duration);
}

/**
 * @param {HTMLElement} groupEl
 * @returns {boolean}
 */
export function isDocumentGroupElHidden(groupEl) {
	const btnEl = groupEl.querySelector('.document-group__collapse');
	return btnEl.classList.contains('document-group__collapse--active');
}

export default {
	toggleDocumentGroupEl,
	showDocumentGroupEl,
	hideDocumentGroupEl,
	isDocumentGroupElHidden,
}
