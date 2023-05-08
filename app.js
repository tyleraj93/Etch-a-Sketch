const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

const get_random_rgb = () => (Math.floor(Math.random() * 256));

for (let i = 0; i < 16; i++) {
    for (let i = 0; i < 16; i++) {
        const div = document.createElement("div");
        div.classList.add("grid");
        const size = container.clientHeight / 16;
        div.style.height = `${size}px`;
        div.style.width = `${size}px`;
        container.appendChild(div);
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = `rgb(${get_random_rgb()}, ${get_random_rgb()}, ${get_random_rgb()})`;
        });
    };
};