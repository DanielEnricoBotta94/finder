let w = 60;
let cells = [];
let current;
let cols, rows;
let stack = [];


function setup() {
    createCanvas(600, 600);
    background(51);

    rows = floor(height / w);
    cols = floor(width / w);

    for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
            cells.push(new Cell(i, j));
        }
    }

    current = cells[0];
}

function draw() {
    background(51)
    for (let c of cells) {
        c.show()
    }
}
