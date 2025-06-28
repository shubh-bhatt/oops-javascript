function House(location, rooms, kitchen) {
  this.location = location,
  this.rooms = rooms,
  this.kitchen = kitchen
}

let myHouse1 = new House("Delhi", 3, 1);
let myHouse2 = new House("Noida", 4, 2);
let myHouse3 = new House("Dehradun", 5, 2);