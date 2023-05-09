// Buttons
const grid_size = document.createElement("button");
grid_size.textContent = "Change size";
document.body.appendChild(grid_size);

const change_to_black = document.createElement("button");
change_to_black.textContent = "Set to B&W";
document.body.appendChild(change_to_black);

const change_to_color = document.createElement("button");
change_to_color.textContent = "Set to RGB";
document.body.appendChild(change_to_color);


// Grid container
const grid_container = document.createElement("div");
grid_container.classList.add("grid_container");
document.body.appendChild(grid_container);


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

function make_grid(grid_size = 16, color = get_shade_black) {
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


// Event listeners
grid_size.addEventListener("click", () => {
    const grids_to_remove = document.querySelectorAll(".grid");
    grids_to_remove.forEach((grid) => {
        grid.remove();
    });
    make_grid(get_grid_size(), get_shade_black);
});

change_to_black.addEventListener("click", () => {
    const grids_to_remove = document.querySelectorAll(".grid");
    grids_to_remove.forEach((grid) => {
        grid.remove();
    });
    make_grid(get_grid_size(), get_shade_black);
});

change_to_color.addEventListener("click", () => {
    const grids_to_remove = document.querySelectorAll(".grid");
    grids_to_remove.forEach((grid) => {
        grid.remove();
    });
    make_grid(get_grid_size(), get_random_rgb);
});

//Inititializer
make_grid();