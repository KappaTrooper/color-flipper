function toPastel(color) {
    let r, g, b;

    if (color.startsWith('rgba') || color.startsWith('rgb')) {
        const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        r = parseInt(match[1]);
        g = parseInt(match[2]);
        b = parseInt(match[3]);
    } else if (color.startsWith('#')) {
        const hex = color.slice(1);
        r = parseInt(hex.slice(0, 2), 16);
        g = parseInt(hex.slice(2, 4), 16);
        b = parseInt(hex.slice(4, 6), 16);
    } else {
        const namedColors = {red: [255, 0, 0], green: [0, 128, 0]};
        [r, g, b] = namedColors[color] || [255, 255, 255];
    }

    r = Math.round((r + 255) / 2);
    g = Math.round((g + 255) / 2);
    b = Math.round((b + 255) / 2);

    const hex = (r << 16 | g << 8 | b).toString(16).padStart(6, '0');
    return `#${hex}`;
}

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"].map(toPastel);

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
