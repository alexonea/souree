var canvas = document.querySelector('canvas');
var renderer = new Vex.Flow.Renderer(canvas, Vex.Flow.Renderer.Backends.CANVAS);
var ctx = renderer.getContext();
var stave = new Vex.Flow.Stave(10, 0, 970);

var onPageLoad = function () {
	canvas.width = 1000;
	stave.addClef('treble').setContext(ctx).draw();
}

window.onload = onPageLoad;