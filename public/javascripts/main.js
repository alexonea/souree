var clef = document.querySelector('#clef');
var title = document.querySelector('.title');

var treble_select = document.querySelector('.treble-select');
var bass_select = document.querySelector('.bass-select');

var current_clef = $('.current-clef');

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

var toggleClefSelectDropdown = function (e) {
	var menu = document.querySelector('.clef-select-menu');
	menu.style.top = e.y + 60 + 'px';
	menu.style.left = e.x - 20 + 'px';
}

var selectTreble = function (e) {
	current_clef.fadeOut(300, function () {
		current_clef.removeClass('bass').addClass('treble');;
		current_clef.fadeIn(300);
	});
	e.preventDefault();
}

var selectBass = function (e) {
	current_clef.fadeOut(300, function () {
		current_clef.removeClass('treble').addClass('bass');;
		current_clef.fadeIn(300);
	});
	e.preventDefault();
}

$('#clef').click(function() {
        $(this).next('.dropdown-menu').fadeToggle(200);
    });

window.onload = onPageLoad;
title.onkeydown = titleKeyEventHandle;
clef.onclick = toggleClefSelectDropdown;
bass_select.onclick = selectBass;
treble_select.onclick = selectTreble;