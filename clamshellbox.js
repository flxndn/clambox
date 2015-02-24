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

	/*
	var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'path'); //Create a path in SVG's namespace
	newElement.setAttribute("d","M 0 0 L 10 10"); //Set path's data
	newElement.style.stroke = "#000"; //Set stroke colour
	newElement.style.strokeWidth = "5px"; //Set stroke width
	svgDoc.appendChild(newElement);


	var el = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
	el.setAttribute('cx', 200);
	el.setAttribute('cy', 200);
	el.setAttribute('r', 5);
	el.setAttribute('fill', '#223FA3');
	el.setAttribute('stroke-width', '1px');
	el.setAttribute('stroke', 'black');

	//var root = document.getElementsByTagNameNS(svgns, 'svg')[0];
	//var root = document.getElementById('base-svg');
	var root = svgDoc
	root.appendChild(el);
	*/
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
