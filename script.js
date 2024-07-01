
document.addEventListener("DOMContentLoaded", (event) => {
	
	let gridSize = 8;
	let buttons = document.querySelectorAll("button");
	buttons.forEach(btn => {
		btn.addEventListener("click", (event) => {
			gridSize = event.target.value;
			createGrid(gridSize);
		});
	});
	
});

function clearGrid(container, size) {
	while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}


function createGrid(size) {
	const gridContainer = document.getElementById("grid-container");
	clearGrid(gridContainer, size);
	for(let i = 1; i <= size; i++) {
		const row = document.createElement("div");
		row.classList.add("row");
		row.style.width = 650 / size + "px";
		gridContainer.appendChild(row);
		for (let j = 1; j <= size; j++) {
			const col = document.createElement("div");
			col.classList.add("col");
			col.style.height = 650 / size + "px";
			col.addEventListener("mouseover", (event) => {
				let r = Math.floor(Math.random() * 256);
				let g = Math.floor(Math.random() * 256);
				let b = Math.floor(Math.random() * 256);
				let a = 0.5;
				event.target.style.backgroundColor = "rgba(" + r + "," + g + "," + b + "," + a + ")";
			});
			row.appendChild(col);
		}
	}
}


	