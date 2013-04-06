var clef = document.querySelector('#clef');
var title = document.querySelector('.title');

var onPageLoad = function () {
	// Init
}

/* Key Events Handles */

var saveTitleUpdate = function () {
	return false;
}

var checkIfDeletable = function() {
	return (title.textContent.length > 0);
}

var titleKeyEventHandle = function (e) {
	switch (e.keyCode) {
		case 13:
			return saveTitleUpdate();
		case 8:
			return checkIfDeletable();
		default:
			return true;
	}
	return false;
}

/* Click handles */

window.onload = onPageLoad;
title.onkeydown = titleKeyEventHandle;