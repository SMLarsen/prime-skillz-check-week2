// 1 - Create an object constructor
// for RightTriangle that takes 3 arguments
// - side1
// - side2
// - base
// The object should have two functions
// - area() returns the area of this triangle
// - perimeter() returns the perimeter of this triangle

function RightTriangle(side1, side2, base) {
  this.side1 = side1;
  this.side2 = side2;
  this.base = base;
  this.area = function() {
    return side1 * base / 2;
  };
  this.perimeter = function() {
    return side1 + side2 + base;
  };
}

// 2 - Create two instances of the RightTriangle
// object. Console log the results of calling
// both functions on both instances.

var a = new RightTriangle(2, 3, 2);
console.log("For a right triangle of 2 X 3 X 2:");
console.log("   Area = ", a.area(), " Square Units");
console.log("   Perimeter = ", a.perimeter(), " Units");

var a = new RightTriangle(5, 7, 3);
console.log("For a right triangle of 5 X 7 X 3:");
console.log("   Area = ", a.area(), " Square Units");
console.log("   Perimeter = ", a.perimeter(), " Units");
