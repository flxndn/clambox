//------------------------------------------------------------------------------
function rectadapt(container, id, x, y, w, h) {
//------------------------------------------------------------------------------
	var r = container.getElementById(id);
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

	rectadapt(svgDoc, 'up_right', 3*thick+width, 0, width+paper+2*thick, thick); 
	rectadapt(svgDoc, 'base_front', 3*thick+width, thick, width+paper, height+2*paper); 
	rectadapt(svgDoc, 'down_right', 3*thick+width, thick+height+2*paper, width+paper+2*thick, thick); 
	rectadapt(svgDoc, 'right', 3*thick+width*2+paper, thick, thick, height+2*paper); 
	rectadapt(svgDoc, 'right_right', 4*thick+width*2+paper, thick, thick, height+2*paper); 
	rectadapt(svgDoc, 'hinge', 2*thick+width, thick+paper, thick, height); 
	rectadapt(svgDoc, 'base_back', 2*thick, thick+paper, width, height); 
	rectadapt(svgDoc, 'left', thick, thick+paper, thick, height); 
	rectadapt(svgDoc, 'left_left', 0, thick+paper, thick, height); 
	rectadapt(svgDoc, 'up_left', 0, paper, width+3*thick, thick); 
	rectadapt(svgDoc, 'down_left', 0, thick+height+paper, width+3*thick, thick);

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
