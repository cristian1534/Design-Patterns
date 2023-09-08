interface BaseCar {
  showCost(): void;
}

class MastodonCar implements BaseCar {
  showCost(): void {
    console.log("MastodonCar costs USD 5OOO");
  }
}

class RhinoCar implements BaseCar {
  showCost(): void {
    console.log("RhinoCar costs USD 10000");
  }
}

interface CarFactory {
  makeCar(): BaseCar;
}

class MastodonCarFactory implements CarFactory {
  makeCar(): BaseCar {
    return new MastodonCar();
  }
}

class RhinoCarFactory implements CarFactory {
  makeCar(): BaseCar {
    return new RhinoCar();
  }
}


function appFactory(factory: CarFactory) {
    const car: BaseCar = factory.makeCar()
    car.showCost()
}

// Use case...
appFactory(new MastodonCarFactory());
appFactory(new RhinoCarFactory())



type FactoryType = "mastodon" | "rhino";

function createFactory(type: FactoryType){
    const factories = {
        mastodon: MastodonCarFactory,
        rhino: RhinoCarFactory
    }
    const factoryClass = factories[type];
    return new factoryClass();
}

appFactory(createFactory("mastodon"));
appFactory(createFactory("rhino"));


// pros: 
// Evita acoplamiento entre los elementos creadores y los productos.
// La creacion de productos sucede en un solo punto Princ de Resp.
// Agregar nuevos productos no require modificar el codigo, solo lo extiende.

// cons:
// Demasiado codigo generico.
// Muchas abstracciones.

// Cuando usarlo.
// Cuando no sabes cuantos prods diferentes habra.
// Cuando necesitas desocoplar el uso de los productos con su creacion.
// Extender el funcionamiento de bibliotecas o frameworks, Ej: WEB, UI.