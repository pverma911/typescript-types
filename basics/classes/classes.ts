// protected class modifier

class Vehicle {
  protected main(): void {
    console.log("Main class called");
  }
}

class Car extends Vehicle {
  driveMain() {
    this.main(); // in protected you can call parent method outside of the parent class only in the child class and parent but not on an instance
  }
}

const carClass = new Car();

carClass.driveMain(); // this is possible

const vehicle = new Vehicle();

//vehicle.main(); // not possible cauz protected method
