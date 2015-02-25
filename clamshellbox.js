
//------------------------------------------------------------------------------
function clear(snap) {
//------------------------------------------------------------------------------
	ee=snap.selectAll('.cardboard');
	for(i=ee.length-1;i>=0; i--) {
		ee[i].remove()
	}
}
//------------------------------------------------------------------------------
function rectadapt(snap, id, x, y, w, h) {
//------------------------------------------------------------------------------
	var r1 = snap.rect(x, y, w, h);
	r1.addClass('cardboard');
	r1.attr({
		fill: "#bada55",
		stroke: "#000",
		strokeWidth: 2
	});
}
//------------------------------------------------------------------------------
function adapt (snap, height, width, thick, paper) {
//------------------------------------------------------------------------------
	clear(snap);
	rectadapt(snap, 'up_right', 3*thick+width, 0, width+paper+2*thick, thick); 
	rectadapt(snap, 'base_front', 3*thick+width, thick, width+paper, height+2*paper); 
	rectadapt(snap, 'down_right', 3*thick+width, thick+height+2*paper, width+paper+2*thick, thick); 
	rectadapt(snap, 'right', 3*thick+width*2+paper, thick, thick, height+2*paper); 
	rectadapt(snap, 'right_right', 4*thick+width*2+paper, thick, thick, height+2*paper); 
	rectadapt(snap, 'hinge', 2*thick+width, thick+paper, thick, height); 
	rectadapt(snap, 'base_back', 2*thick, thick+paper, width, height); 
	rectadapt(snap, 'left', thick, thick+paper, thick, height); 
	rectadapt(snap, 'left_left', 0, thick+paper, thick, height); 
	rectadapt(snap, 'up_left', 0, paper, width+3*thick, thick); 
	rectadapt(snap, 'down_left', 0, thick+height+paper, width+3*thick, thick);

	var hole = snap.circle(4*thick+width*2+paper, thick+(height+2*paper)/2, 12.7 );
	hole.attr({
		fill: "#fff",
		stroke: "#000",
		strokeWidth: 1
	});
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
