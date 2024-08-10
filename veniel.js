class Shape {
  constructor() {
    this._x1 = 0;
    this._y1 = 0;
    this._x2 = 0;
    this._y2 = 0;
  }

  setPoint1(x, y) {
    // Ignore coincident points
    if (x === this._x1 && y === this._y1) return;

    // Update the coordinates for point 1
    this._x1 = x;
    this._y1 = y;
    console.log(`Point 1 updated to (${x}, ${y})`);
  }

  setPoint2(x, y) {
    // Ignore coincident points
    if (x === this._x2 && y === this._y2) return;

    // Update the coordinates for point 2
    this._x2 = x;
    this._y2 = y;
    console.log(`Point 2 updated to (${x}, ${y})`);
  }
}

// Example usage:
const shape = new Shape();
shape.setPoint1(5, 10); // Point 1 updated to (5, 10)
shape.setPoint1(5, 10); // No output (coincident point ignored)
shape.setPoint2(20, 30); // Point 2 updated to (20, 30)
shape.setPoint2(20, 30); // No output (coincident point ignored)
shape.setPoint1(15, 25); // Point 1 updated to (15, 25)
