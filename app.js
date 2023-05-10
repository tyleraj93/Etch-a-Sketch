// H1 selector
const header = document.querySelector("h1");

// Grid container
const grid_container = document.createElement("div");
grid_container.classList.add("grid_container");
header.appendChild(grid_container);

// Button container
const button_container = document.createElement("button");
button_container.classList.add("button-container");
document.body.appendChild(button_container);

// Buttons
const grid_size_button = document.createElement("button");
grid_size_button.textContent = "Change size";
button_container.appendChild(grid_size_button);

const change_to_black = document.createElement("button");
change_to_black.textContent = "Set to B&W";
button_container.appendChild(change_to_black);

const change_to_color = document.createElement("button");
change_to_color.textContent = "Set to RGB";
button_container.appendChild(change_to_color);

// Functions
const get_random_rgb = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const get_shade_black = () => {
    const l = Math.floor(Math.random() * 101);
    return `hsl(0, 0%, ${l}%)`
}

function get_grid_size() {
    num = parseInt(
        prompt("What size would you like the grid (Smaller than 100)?")
    );
    if (num > 100) {
        get_grid_size();
    }
    return num;
}

function make_grid(grid_size, color) {
    const size = grid_container.clientHeight / grid_size;
    for (let i = 0; i < grid_size; i++) {
        for (let i = 0; i < grid_size; i++) {
            let div = document.createElement("div");
            div.classList.add("grid");
            div.style.height = `${size}px`;
            div.style.width = `${size}px`;
            grid_container.appendChild(div);
            div.addEventListener("mouseover", () => {
                div.style.backgroundColor = `${color()}`;
            });
        }
    }
}

// Variables
let grid_size = 16;
let color = get_shade_black;

// Event listeners
grid_size_button.addEventListener("click", () => {
    const grids_to_remove = document.querySelectorAll(".grid");
    grids_to_remove.forEach((grid) => {
        grid.remove();
    });
    grid_size = get_grid_size();
    make_grid(grid_size, color);
});

change_to_black.addEventListener("click", () => {
    const grids_to_remove = document.querySelectorAll(".grid");
    grids_to_remove.forEach((grid) => {
        grid.remove();
    });
    color = get_shade_black;
    make_grid(grid_size, color);
});

change_to_color.addEventListener("click", () => {
    const grids_to_remove = document.querySelectorAll(".grid");
    grids_to_remove.forEach((grid) => {
        grid.remove();
    });
    color = get_random_rgb;
    make_grid(grid_size, color);
});

//Inititializer
make_grid(grid_size, color);