var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pizza = /** @class */ (function () {
    function Pizza() {
    }
    Pizza.prototype.getDescription = function () {
        return this.description;
    };
    return Pizza;
}());
// SMALL PIZZA
var SmallPizza = /** @class */ (function (_super) {
    __extends(SmallPizza, _super);
    function SmallPizza() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Small Pizza 4 Pieces: ";
        return _this;
    }
    SmallPizza.prototype.price = function () {
        return 200;
    };
    return SmallPizza;
}(Pizza));
// LARGE PIZZA
var LargePizza = /** @class */ (function (_super) {
    __extends(LargePizza, _super);
    function LargePizza() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Large Pizza 8 pieces: ";
        return _this;
    }
    LargePizza.prototype.price = function () {
        return 350;
    };
    return LargePizza;
}(Pizza));
/**
 * OPTIONS FOR PIZZA.
 */
var OptionsPizza = /** @class */ (function (_super) {
    __extends(OptionsPizza, _super);
    function OptionsPizza(pizza) {
        var _this = _super.call(this) || this;
        _this.decoratedPizza = pizza;
        return _this;
    }
    return OptionsPizza;
}(Pizza));
var ExtraMozzarella = /** @class */ (function (_super) {
    __extends(ExtraMozzarella, _super);
    function ExtraMozzarella() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtraMozzarella.prototype.getDescription = function () {
        return this.decoratedPizza.getDescription() + "Extra Mozzarella ";
    };
    ExtraMozzarella.prototype.price = function () {
        return this.decoratedPizza.price() + 100;
    };
    return ExtraMozzarella;
}(OptionsPizza));
var ExtraOlives = /** @class */ (function (_super) {
    __extends(ExtraOlives, _super);
    function ExtraOlives() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtraOlives.prototype.getDescription = function () {
        return this.decoratedPizza.getDescription() + "Extra Olives ";
    };
    ExtraOlives.prototype.price = function () {
        return this.decoratedPizza.price() + 50;
    };
    return ExtraOlives;
}(OptionsPizza));
// USE CASE: Client order 1 Small Pizza with extra mozzarella and
// extra olives.
var myPizza = new SmallPizza();
myPizza = new ExtraMozzarella(myPizza);
myPizza = new ExtraOlives(myPizza);
console.log(myPizza.getDescription());
console.log(myPizza.price());
