"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
var Pizza = /** @class */ (function () {
    function Pizza(flavor, price) {
        this._Flavor = flavor;
        this._Price = price;
    }
    Pizza.prototype.getFlavor = function () {
        return this._Flavor;
    };
    Pizza.prototype.setFlavor = function (flavor) {
        this._Flavor = flavor;
    };
    Pizza.prototype.getPrice = function () {
        return this._Price;
    };
    Pizza.prototype.setPrice = function (price) {
        this._Price = price;
    };
    Pizza.prototype.data = function () {
        console.log("Pizza: ", this._Flavor);
        console.log("Price: ", this._Price);
    };
    return Pizza;
}());
exports.Pizza = Pizza;
