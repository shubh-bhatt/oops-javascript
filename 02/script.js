class Toffee {
  constructor(flavor, color, taste, shape) {
    this.flavor = flavor;
    this.color = color;
    this.taste = taste;
    this.shape = shape;
  }
}

let t1 = new Toffee("Strawberry", "Pink", "Sweet", "Round");
let t2 = new Toffee("Chocolate", "Brown", "Sweet", "Square");
let t3 = new Toffee("Vanilla", "White", "Sweet", "Heart");

console.log(t1);
console.log(t1.flavor);
