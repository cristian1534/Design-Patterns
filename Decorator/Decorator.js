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
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.getDescription = function () {
        return this.description;
    };
    return Car;
}());
var ModelS = /** @class */ (function (_super) {
    __extends(ModelS, _super);
    function ModelS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Model S";
        return _this;
    }
    ModelS.prototype.cost = function () {
        return 73000;
    };
    return ModelS;
}(Car));
var ModelX = /** @class */ (function (_super) {
    __extends(ModelX, _super);
    function ModelX() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Model x";
        return _this;
    }
    ModelX.prototype.cost = function () {
        return 77000;
    };
    return ModelX;
}(Car));
var CarOptions = /** @class */ (function (_super) {
    __extends(CarOptions, _super);
    function CarOptions(car) {
        var _this = _super.call(this) || this;
        _this.decoratedCar = car;
        return _this;
    }
    return CarOptions;
}(Car));
var EnhanceAutoPilot = /** @class */ (function (_super) {
    __extends(EnhanceAutoPilot, _super);
    function EnhanceAutoPilot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EnhanceAutoPilot.prototype.getDescription = function () {
        return this.decoratedCar.getDescription() + ", Enhanced AutoPilot";
    };
    EnhanceAutoPilot.prototype.cost = function () {
        return this.decoratedCar.cost() + 5000;
    };
    return EnhanceAutoPilot;
}(CarOptions));
var RearFacingSeat = /** @class */ (function (_super) {
    __extends(RearFacingSeat, _super);
    function RearFacingSeat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RearFacingSeat.prototype.getDescription = function () {
        return this.decoratedCar.getDescription() + ", Rear facing seats";
    };
    RearFacingSeat.prototype.cost = function () {
        return this.decoratedCar.cost() + 4000;
    };
    return RearFacingSeat;
}(CarOptions));
// use case...
var myTesla = new ModelX();
myTesla = new RearFacingSeat(myTesla);
myTesla = new EnhanceAutoPilot(myTesla);
console.log(myTesla.getDescription());
console.log(myTesla.cost());
