import { Pizza } from "./Pizza";
import { PizzaBuilder } from "./PizzaBuilder";

let pizza: Pizza = PizzaBuilder.pizza()
  .withFlavor("Pepperoni")
  .withPrice(350)
  .build();

pizza.data();
