class ParkingSystem {
  constructor(big, medium, small) {
    (this[1] = big), (this[2] = medium), (this[3] = small);
  }
}

ParkingSystem.prototype.addCar = function (carType) {
  if (this[carType] > 0) {
    this[carType] = this[carType] - 1;
    return true;
  }
  return false;
};
