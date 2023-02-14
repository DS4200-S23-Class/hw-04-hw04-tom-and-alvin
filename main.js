function toggle(){
	this.classList.toggle("clicked");

}

function get_coordinates(){
	let x = (this.getAttribute('cx') - 100) / 40;
	let y = 10 - ((this.getAttribute('cy') - 100) / 40);

	let coordinate = `(${x}, ${y})`;
	document.getElementById("lastClicked").innerHTML = coordinate;
}


function borders() {
	const circles = document.getElementsByTagName("circle");

	for (let i = 0; i <circles.length; i++) {
		circles[i].addEventListener("click", toggle);
		circles[i].addEventListener("click", get_coordinates);
	}

}

(function(){
	borders();
})();



function add_circle() {
	let frame = document.getElementById("frame");

	// Input numbers
	let x = 100 + ((document.getElementById("xCoordinate").value) * 40) ;
	let y = 500 - ((document.getElementById("yCoordinate").value) * 40);


	// Create SVG circle element
	let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	circle.setAttribute("cx", x);
	circle.setAttribute("cy", y);
	circle.setAttribute("r", "8");
	circle.setAttribute("class", "norm");

	// Add circle element to the SVG container
	frame.appendChild(circle);
	borders()
}

document.getElementById("addPoint")
		.addEventListener('click', add_circle);






	

