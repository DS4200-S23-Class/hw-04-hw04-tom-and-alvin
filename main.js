/*Allows the points on the grid to be clicked and allows the button to be 
clicked to add more points*/
function toggle(){
	this.classList.toggle("clicked");
}

//This function allows the user to see what the last point clicked was
function get_coordinates(){
	let x = (this.getAttribute('cx') - 100) / 40;
	let y = 10 - ((this.getAttribute('cy') - 100) / 40);

	let coordinate = "Last Point Clicked: " + `(${x}, ${y})`;
	document.getElementById("lastClicked").innerHTML = coordinate;
}

/*Allows the cicles to be clicked which will then give them a border and tell what the
coordinate of that point was*/
function borders() {
	const circles = document.getElementsByTagName("circle");

	for (let i = 0; i <circles.length; i++) {
		circles[i].addEventListener("click", toggle);
		circles[i].addEventListener("click", get_coordinates);
	}
}

/*This allows the circles to be clicked before a new point is added to the grid so that it
is not dependent on the button feature*/
(function(){
	borders();
})();

//Allows a circle to be added to the grid based on the user entries in the dropdown menu
function add_circle() {
	let frame = document.getElementById("frame");

	// Based on the user entry in the dropdown, it will proportionally add it to the grid
	let x = 100 + ((document.getElementById("xCoordinate").value) * 40) ;
	let y = 500 - ((document.getElementById("yCoordinate").value) * 40);


	// Create the SVG circle element
	let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	circle.setAttribute("cx", x);
	circle.setAttribute("cy", y);
	circle.setAttribute("r", "8");
	circle.setAttribute("class", "norm");

	// Add circle element to the SVG container
	frame.appendChild(circle);
	borders()
}

//Adds an event listener for the adding circle function
document.getElementById("addPoint")
		.addEventListener('click', add_circle);