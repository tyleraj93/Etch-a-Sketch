const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

const get_random_rgb = () => (Math.floor(Math.random() * 256));
const grid_size = get_grid_size();

// Made funtction to get grid size.
// Start with making a button to use function on click
function get_grid_size() {
    num = parseInt(prompt("What size would you like the grid (Smaller than 50x50)?"));
    if (num > 50) {
        get_grid_size();
    }
    return num;
}

for (let i = 0; i < grid_size; i++) {
    for (let i = 0; i < grid_size; i++) {
        const div = document.createElement("div");
        div.classList.add("grid");
        const size = container.clientHeight / grid_size;
        div.style.height = `${size}px`;
        div.style.width = `${size}px`;
        container.appendChild(div);
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = `rgb(${get_random_rgb()}, ${get_random_rgb()}, ${get_random_rgb()})`;
        });
    };
};