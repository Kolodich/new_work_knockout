import knockout from 'knockout';

if (typeof window !== undefined) {
	window.ko = knockout;

	require('knockout-sortable');
}

export default knockout;
