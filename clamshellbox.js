
//------------------------------------------------------------------------------
function clear(snap) {
//------------------------------------------------------------------------------
	ee=snap.selectAll('.cardboard', '.hole');
	for(i=ee.length-1;i>=0; i--) {
		ee[i].remove()
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
	return g;
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
$(document).ready(function() { 
	$('#button_update').bind('click', update);
	update();
});
