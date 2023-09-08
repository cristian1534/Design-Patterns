// step 1
interface CPU {
  setSeries(series: string): void;
}
interface Memory {
  setCapacityInGB(capacity: number): void;
}
interface Display {
  setResolution(resolution: string): void;
}
interface ProductAbstractFactory {
  createPhone(): Phone;
  createLaptop(): Laptop;
  createTablet(): Tablet;
}

type Family = "Phone" | "Laptop" | "Tablet";

// step 2

class Phone implements CPU, Memory, Display {
  setSeries(series: string): void {
    console.log("Setting series for Phone", series);
  }
  setCapacityInGB(capacity: number): void {
    console.log("Setting capacity in GB for Phone", capacity);
  }
  setResolution(resolution: string): void {
    console.log("Setting resolution for Phone", resolution);
  }
}

class Laptop implements CPU, Memory, Display {
  setSeries(series: string): void {
    console.log("Setting series for Phone", series);
  }
  setCapacityInGB(capacity: number): void {
    console.log("Setting capacity in GB for Phone", capacity);
  }
  setResolution(resolution: string): void {
    console.log("Setting resolution for Phone", resolution);
  }
}

class Tablet implements CPU, Memory, Display {
  setSeries(series: string): void {
    console.log("Setting series for Phone", series);
  }
  setCapacityInGB(capacity: number): void {
    console.log("Setting capacity in GB for Phone", capacity);
  }
  setResolution(resolution: string): void {
    console.log("Setting resolution for Phone", resolution);
  }
}

// step 3
class ProductFactory implements ProductAbstractFactory {
  createPhone(): Phone {
    return new Phone();
  }
  createLaptop(): Laptop {
    return new Laptop();
  }
  createTablet(): Tablet {
    return new Tablet();
  }
}

// step 4
function appProductFactory(factory: ProductAbstractFactory) {
  const CPU: CPU = factory.createPhone();
  const Laptop: Laptop = factory.createLaptop();
  const Tablet: Tablet = factory.createLaptop();

  CPU.setSeries("abc");
  Laptop.setCapacityInGB(32);
  Tablet.setResolution("15'");
}

function createProductFactory(type: Family): ProductAbstractFactory {
  const factories = {
    Phone: ProductFactory,
    Laptop: ProductFactory,
    Tablet: ProductFactory,
  };

  const Factory = factories[type];
  return new Factory();
}

// use case...
appProductFactory(createProductFactory("Laptop"));
appProductFactory(createProductFactory("Phone"));
appProductFactory(createProductFactory("Tablet"));
