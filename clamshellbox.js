//------------------------------------------------------------------------------
function rectadapt(r, x, y, w, h) {
//------------------------------------------------------------------------------
	r.setAttributeNS(null, "x", x);
	r.setAttributeNS(null, "y", y);
	r.setAttributeNS(null, "width", w);
	r.setAttributeNS(null, "height", h);
}
//------------------------------------------------------------------------------
function adapt (height, width, thick, paper) {
//------------------------------------------------------------------------------
	var svg = document.getElementById('base-svg');
	var svgDoc = svg.contentDocument;

	var up_right = svgDoc.getElementById('up_right');
	rectadapt(up_right, 3*thick+width, 0, width+paper+2*thick, thick);

	var base_front = svgDoc.getElementById('base_front');
	rectadapt(base_front, 3*thick+width, thick, width+paper, height+2*paper);

	var down_right = svgDoc.getElementById('down_right');
	rectadapt(down_right, 3*thick+width, thick+height+2*paper, width+paper+2*thick, thick);

	var right = svgDoc.getElementById('right');
	rectadapt(right, 3*thick+width*2+paper, thick, thick, height+2*paper);

	var right_right = svgDoc.getElementById('right_right');
	rectadapt(right_right, 4*thick+width*2+paper, thick, thick, height+2*paper);

	var hinge = svgDoc.getElementById('hinge');
	rectadapt(hinge, 2*thick+width, thick+paper, thick, height);

	var base_back = svgDoc.getElementById('base_back');
	rectadapt(base_back, 2*thick, thick+paper, width, height);

	var left = svgDoc.getElementById('left');
	rectadapt(left, thick, thick+paper, thick, height);

	var left_left = svgDoc.getElementById('left_left');
	rectadapt(left_left, 0, thick+paper, thick, height);

	var up_left = svgDoc.getElementById('up_left');
	rectadapt(up_left, 0, paper, width+3*thick, thick);

	var down_left = svgDoc.getElementById('down_left');
	rectadapt(down_left, 0, thick+height+paper, width+3*thick, thick);

	var hole = svgDoc.getElementById('hole');
	hole.setAttributeNS(null, "cx", 4*thick+width*2+paper);
	hole.setAttributeNS(null, "cy", thick+(height+2*paper)/2); 

	//svgDoc.append('<circle id="hole" cx="100" cy="100" r="12.7" />');
}
//------------------------------------------------------------------------------
function update() {
//------------------------------------------------------------------------------
	adapt( 
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
