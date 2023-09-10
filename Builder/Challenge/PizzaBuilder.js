"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzaBuilder = void 0;
var Pizza_1 = require("./Pizza");
var PizzaBuilder = /** @class */ (function () {
    function PizzaBuilder() {
        this._Flavor = "";
        this._Price = 0;
    }
    PizzaBuilder.pizza = function () {
        return new PizzaBuilder();
    };
    PizzaBuilder.prototype.withFlavor = function (flavor) {
        this._Flavor = flavor;
        return this;
    };
    PizzaBuilder.prototype.withPrice = function (price) {
        this._Price = price;
        return this;
    };
    PizzaBuilder.prototype.build = function () {
        var pizza = new Pizza_1.Pizza(this._Flavor, this._Price);
        return pizza;
    };
    return PizzaBuilder;
}());
exports.PizzaBuilder = PizzaBuilder;
