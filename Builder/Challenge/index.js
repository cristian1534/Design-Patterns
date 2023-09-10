"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PizzaBuilder_1 = require("./PizzaBuilder");
var pizza = PizzaBuilder_1.PizzaBuilder.pizza()
    .withFlavor("Pepperoni")
    .withPrice(350)
    .build();
pizza.data();
