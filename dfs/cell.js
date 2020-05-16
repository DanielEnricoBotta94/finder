function Cell(i, j) {
    this.i = i;
    this.j = j;
    this.walls = [true, true, true, true];
    this.visited = false;

    this.show = function () {
        const x = this.i * w;
        const y = this.j * w;
        stroke(255)
        if (this.walls[0])
            line(x, y, x + w, y)
        if (this.walls[1])
            line(x + w, y, x + w, y + w)
        if (this.walls[2])
            line(x + w, y + w, x, y + w)
        if (this.walls[3])
            line(x, y + w, x, y)

        if (this.visited) {
            noStroke()
            fill(51)
            rect(x, y, w, w)
        }
    }

    this.highlight = function() {
        const x = this.i * w;
        const y = this.j * w;
        noStroke();
        fill(0, 0, 255, 100);
        rect(x, y, w, w);
      };

    this.checkNeighbour = function () {
        let neighbours = []
        
        let top = cells[index(i, j - 1)];
        let right = cells[index(i + 1, j)];
        let bottom = cells[index(i, j + 1)];
        let left = cells[index(i - 1, j)];

        if (top && !top.visited)
            neighbours.push(top)
        if (bottom && !bottom.visited)
            neighbours.push(bottom)
        if (left && !left.visited)
            neighbours.push(left)
        if (right && !right.visited)
            neighbours.push(right);

        if (neighbours.length == 0)
            return undefined;

        let chosen = floor(random(0, neighbours.length));
        return neighbours[chosen];
    }
}