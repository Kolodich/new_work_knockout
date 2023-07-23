import $ from 'jquery';


if (typeof window !== 'undefined') {
	window.$ = $;
	window.jQuery = $;

	require('jquery-ui/dist/jquery-ui');
}

export default $;
