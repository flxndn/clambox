var s = Snap(800, 600);
var r1 = s.rect(15, 15, 290, 30);

adapt(s, 297, 210, 50, 3);

//------------------------------------------------------------------------------
function rectadapt(s, id, x, y, w, h) {
//------------------------------------------------------------------------------
	var r1 = s.rect(x, y, w, h);
	r1.attr({
		fill: "#bada55",
		stroke: "#000",
		strokeWidth: 2
	});
}
//------------------------------------------------------------------------------
function adapt (s, height, width, thick, paper) {
//------------------------------------------------------------------------------
	rectadapt(s, 'up_right', 3*thick+width, 0, width+paper+2*thick, thick); 
	rectadapt(s, 'base_front', 3*thick+width, thick, width+paper, height+2*paper); 
	rectadapt(s, 'down_right', 3*thick+width, thick+height+2*paper, width+paper+2*thick, thick); 
	rectadapt(s, 'right', 3*thick+width*2+paper, thick, thick, height+2*paper); 
	rectadapt(s, 'right_right', 4*thick+width*2+paper, thick, thick, height+2*paper); 
	rectadapt(s, 'hinge', 2*thick+width, thick+paper, thick, height); 
	rectadapt(s, 'base_back', 2*thick, thick+paper, width, height); 
	rectadapt(s, 'left', thick, thick+paper, thick, height); 
	rectadapt(s, 'left_left', 0, thick+paper, thick, height); 
	rectadapt(s, 'up_left', 0, paper, width+3*thick, thick); 
	rectadapt(s, 'down_left', 0, thick+height+paper, width+3*thick, thick);

	/*
	var hole = s.getElementById('hole');
	hole.setAttributeNS(null, "cx", 4*thick+width*2+paper);
	hole.setAttributeNS(null, "cy", thick+(height+2*paper)/2); 
	*/
}
/*
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
*/
