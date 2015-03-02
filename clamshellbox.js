
//------------------------------------------------------------------------------
function clear(snap) {
//------------------------------------------------------------------------------
	ee=snap.selectAll('.cardboard, .hole, .level, line');
	for(i=ee.length-1;i>=0; i--) {
		ee[i].remove();
	}
}
//------------------------------------------------------------------------------
function rectadapt(snap, id, x, y, w, h) {
//------------------------------------------------------------------------------
	var r = snap.rect(x, y, w, h);
	r.addClass('cardboard');
	return r;
}
//------------------------------------------------------------------------------
function h (snap, y, textPosition) {
// Horizontal guide
//------------------------------------------------------------------------------
	var r=snap.line(0,y,textPosition,y).attr({stroke: '#00ADEF','stroke-opacity': 0.3});
	var t=snap.text(textPosition, y, ""+y);
	t.addClass('level');
	return r;
}
//------------------------------------------------------------------------------
function v (snap, x, textPosition) {
// Horizontal guide
//------------------------------------------------------------------------------
	var r=snap.line(x,0,x,textPosition).attr({stroke: '#00ADEF','stroke-opacity': 0.3});
	var t=snap.text(x, textPosition, ""+x)
	t.addClass('level');
	wt=t.getBBox().width;
	ht=t.getBBox().height;
	t.transform('t-'+ht+', '+wt+'r-90');
	return r;
}
//------------------------------------------------------------------------------
function adapt (snap, height, width, thick, paper) {
//------------------------------------------------------------------------------
	clear(snap);
	g = snap.g();
	g.add(rectadapt(snap, 'up_right', 3*thick+width, 0, width+paper+2*thick, thick));
	g.add(rectadapt(snap, 'base_front', 3*thick+width, thick, width+paper, height+2*paper)); 
	g.add(rectadapt(snap, 'down_right', 3*thick+width, thick+height+2*paper, width+paper+2*thick, thick)); 
	g.add(rectadapt(snap, 'right', 3*thick+width*2+paper, thick, thick, height+2*paper)); 
	g.add(rectadapt(snap, 'right_right', 4*thick+width*2+paper, thick, thick, height+2*paper)); 
	g.add(rectadapt(snap, 'hinge', 2*thick+width, thick+paper, thick, height)); 
	g.add(rectadapt(snap, 'base_back', 2*thick, thick+paper, width, height)); 
	g.add(rectadapt(snap, 'left', thick, thick+paper, thick, height)); 
	g.add(rectadapt(snap, 'left_left', 0, thick+paper, thick, height)); 
	g.add(rectadapt(snap, 'up_left', 0, paper, width+3*thick, thick)); 
	g.add(rectadapt(snap, 'down_left', 0, thick+height+paper, width+3*thick, thick));

	var hole = snap.circle(4*thick+width*2+paper, thick+(height+2*paper)/2, 12.7 );
	hole.addClass('hole');
	g.add(hole)

	var h1=0;
	var h2=h1+paper;
	var h3=h1+thick;
	var h4=h2+thick;
	var h5=h4+height;
	var h6=h3+2*paper+height;
	var h7=h5+thick;
	var h8=h6+thick;

	var v1=0;
	var v2=v1+thick;
	var v3=v2+thick;
	var v4=v3+width;
	var v5=v4+thick;
	var v6=v5+width+paper;
	var v7=v6+thick;
	var v8=v7+thick;
	
	h(snap, h1, v8+10);
	h(snap, h2, v8+40);
	h(snap, h3, v8+10);
	h(snap, h4, v8+40);
	h(snap, h5, v8+10);
	h(snap, h6, v8+40);
	h(snap, h7, v8+10);
	h(snap, h8, v8+40);

	v(snap, v1, h8+10);
	v(snap, v2, h8+10);
	v(snap, v3, h8+10);
	v(snap, v4, h8+10);
	v(snap, v5, h8+10);
	v(snap, v6, h8+10);
	v(snap, v7, h8+10);
	v(snap, v8, h8+10);
	
	return g;
}
//------------------------------------------------------------------------------
function toSchema() {
//------------------------------------------------------------------------------
	$('#measures_layer').hide();
	$('#measures_button').removeClass('enabled');

	$('#schema_layer').show();
	$('#schema_button').addClass('enabled');
	update();
}
//------------------------------------------------------------------------------
function toMeasures() {
//------------------------------------------------------------------------------
	$('#measures_layer').show();
	$('#measures_button').addClass('enabled');

	$('#schema_layer').hide();
	$('#schema_button').removeClass('enabled');
}
//------------------------------------------------------------------------------
function update() {
//------------------------------------------------------------------------------
	var snap = Snap('#svgClamshell');
	adapt(	snap, 
			parseInt($('#book_height').val()),
			parseInt($('#book_width').val()),
			parseInt($('#book_thickness').val()),
			parseInt($('#book_paper').val() )
		);
}
//------------------------------------------------------------------------------
function set_limits_visibility(value) {
//------------------------------------------------------------------------------
	var snap = Snap('#book_perspective');

	snap.select('#path_yz1').attr('visibility', value);
	snap.select('#path_yz2').attr('visibility', value);

	snap.select('#path_xz1').attr('visibility', value);
	snap.select('#path_xz2').attr('visibility', value);

	snap.select('#path_xy1').attr('visibility', value);
	snap.select('#path_xy2').attr('visibility', value);
	snap.select('#path_xy3').attr('visibility', value);
}
//------------------------------------------------------------------------------
function hide_limits() {
//------------------------------------------------------------------------------
	set_limits_visibility('hidden');
}
//------------------------------------------------------------------------------
function show_limits() {
//------------------------------------------------------------------------------
	set_limits_visibility('visible');
}
//------------------------------------------------------------------------------
function set_limits_xz(value) {
//------------------------------------------------------------------------------
	var snap = Snap('#book_perspective');
	snap.select('#path_xz1').attr('visibility', value);
	snap.select('#path_xz2').attr('visibility', value);
}
//------------------------------------------------------------------------------
function show_limits_xz() {
//------------------------------------------------------------------------------
	set_limits_xz('visible');
}
//------------------------------------------------------------------------------
function hide_limits_xz() {
//------------------------------------------------------------------------------
	set_limits_xz('hidden');
}
//------------------------------------------------------------------------------
function set_limits_yz(value) {
//------------------------------------------------------------------------------
	var snap = Snap('#book_perspective');
	snap.select('#path_yz1').attr('visibility', value);
	snap.select('#path_yz2').attr('visibility', value);
}
//------------------------------------------------------------------------------
function show_limits_yz() {
//------------------------------------------------------------------------------
	set_limits_yz('visible');
}
//------------------------------------------------------------------------------
function hide_limits_yz() {
//------------------------------------------------------------------------------
	set_limits_yz('hidden');
}
//------------------------------------------------------------------------------
function set_limits_xy(value) {
//------------------------------------------------------------------------------
	var snap = Snap('#book_perspective');
	snap.select('#path_xy1').attr('visibility', value);
	snap.select('#path_xy2').attr('visibility', value);
}
//------------------------------------------------------------------------------
function show_limits_xy() {
//------------------------------------------------------------------------------
	set_limits_xy('visible');
}
//------------------------------------------------------------------------------
function hide_limits_xy() {
//------------------------------------------------------------------------------
	set_limits_xy('hidden');
}
//------------------------------------------------------------------------------
function set_limits_xy2(value) {
//------------------------------------------------------------------------------
	var snap = Snap('#book_perspective');
	snap.select('#path_xy2').attr('visibility', value);
	snap.select('#path_xy3').attr('visibility', value);
}
//------------------------------------------------------------------------------
function show_limits_xy2() {
//------------------------------------------------------------------------------
	set_limits_xy2('visible');
}
//------------------------------------------------------------------------------
function hide_limits_xy2() {
//------------------------------------------------------------------------------
	set_limits_xy2('hidden');
}
//------------------------------------------------------------------------------
$(document).ready(function() { 
	$('#schema_layer').hide();
	hide_limits();

	$('#measures_button').addClass('enabled');
	$('#schema_button').bind('click', toSchema);
	$('#measures_button').bind('click', toMeasures);

	$('#book_width').bind('focus', show_limits_yz);
	$('#book_width').bind('blur', hide_limits_yz);

	$('#book_height').bind('focus', show_limits_xz);
	$('#book_height').bind('blur', hide_limits_xz);

	$('#book_thickness').bind('focus', show_limits_xy);
	$('#book_thickness').bind('blur', hide_limits_xy);

	$('#book_paper').bind('focus', show_limits_xy2);
	$('#book_paper').bind('blur', hide_limits_xy2);
});
