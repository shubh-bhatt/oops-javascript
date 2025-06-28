class Toffee {
  constructor(flavor, color, taste, shape) {
    this.flavor = flavor;
    this.color = color;
    this.taste = taste;
    this.shape = shape;
  }
}

Toffee.prototype.price = 10; //price common to all using prototype
Toffee.prototype.isHealthy = function () {
  console.log("Healthy to eat");
};

let t1 = new Toffee("Strawberry", "Pink", "Sweet", "Round");
let t2 = new Toffee("Chocolate", "Brown", "Sweet", "Square");
let t3 = new Toffee("Vanilla", "White", "Sweet", "Heart");

console.log(t1.price);
console.log(t1.isHealthy());

console.log(t2.price);
console.log(t2.isHealthy());

console.log(t3.price);
console.log(t3.isHealthy());