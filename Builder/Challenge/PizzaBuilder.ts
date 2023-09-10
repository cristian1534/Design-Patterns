import { Pizza } from "./Pizza";

export class PizzaBuilder {
  private _Flavor: string;
  private _Price: number;

  constructor() {
    this._Flavor = "";
    this._Price = 0;
  }

  public static pizza(): PizzaBuilder {
    return new PizzaBuilder();
  }

  public withFlavor(flavor: string): PizzaBuilder {
    this._Flavor = flavor;
    return this;
  }

  public withPrice(price: number): PizzaBuilder {
    this._Price = price;
    return this;
  }

  public build(): Pizza {
    let pizza: Pizza = new Pizza(this._Flavor, this._Price);
    return pizza;
  }
}
