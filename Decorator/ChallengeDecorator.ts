abstract class Pizza {
  public description: string;
  public getDescription(): string {
    return this.description;
  }
  public abstract price(): number;
}

// SMALL PIZZA
class SmallPizza extends Pizza {
  public description = "Small Pizza 4 Pieces: ";
  public price(): number {
    return 200;
  }
}

// LARGE PIZZA
class LargePizza extends Pizza {
  public description = "Large Pizza 8 pieces: ";
  public price(): number {
    return 350;
  }
}

/**
 * OPTIONS FOR PIZZA.
 */
abstract class OptionsPizza extends Pizza {
  decoratedPizza: Pizza;
  constructor(pizza: Pizza) {
    super();
    this.decoratedPizza = pizza;
  }

  public abstract getDescription(): string;
  public abstract price(): number;
}

class ExtraMozzarella extends OptionsPizza {
  public getDescription(): string {
    return this.decoratedPizza.getDescription() + "Extra Mozzarella ";
  }
  public price(): number {
    return this.decoratedPizza.price() + 100;
  }
}

class ExtraOlives extends OptionsPizza {
  public getDescription(): string {
    return this.decoratedPizza.getDescription() + "Extra Olives ";
  }
  public price(): number {
    return this.decoratedPizza.price() + 50;
  }
}

// USE CASE: Client order 1 Small Pizza with extra mozzarella and
// extra olives.

let myPizza = new SmallPizza();
myPizza = new ExtraMozzarella(myPizza);
myPizza = new ExtraOlives(myPizza);

console.log(myPizza.getDescription());
console.log(myPizza.price());

