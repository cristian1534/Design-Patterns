abstract class Car {
  public description: string;

  public getDescription(): string {
    return this.description;
  }

  public abstract cost(): number;
}

class ModelS extends Car {
  public description = "Model S";

  public cost(): number {
    return 73000;
  }
}

class ModelX extends Car {
  public description = "Model x";

  public cost(): number {
    return 77000;
  }
}

abstract class CarOptions extends Car {
  decoratedCar: Car;

  constructor(car: Car) {
    super();
    this.decoratedCar = car;
  }
  public abstract getDescription(): string;
  public abstract cost(): number;
}

class EnhanceAutoPilot extends CarOptions {
  public getDescription(): string {
    return this.decoratedCar.getDescription() + ", Enhanced AutoPilot";
  }
  public cost(): number {
    return this.decoratedCar.cost() + 5000;
  }
}

class RearFacingSeat extends CarOptions {
  public getDescription(): string {
    return this.decoratedCar.getDescription() + ", Rear facing seats";
  }
  public cost(): number {
    return this.decoratedCar.cost() + 4000;
  }
}

// use case...
let myTesla = new ModelS();
myTesla = new RearFacingSeat(myTesla);
myTesla = new EnhanceAutoPilot(myTesla);

console.log(myTesla.getDescription());
console.log(myTesla.cost());
