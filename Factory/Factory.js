var MastodonCar = /** @class */ (function () {
    function MastodonCar() {
    }
    MastodonCar.prototype.showCost = function () {
        console.log("MastodonCar costs USD 5OOO");
    };
    return MastodonCar;
}());
var RhinoCar = /** @class */ (function () {
    function RhinoCar() {
    }
    RhinoCar.prototype.showCost = function () {
        console.log("RinhoCar costs USD 10000");
    };
    return RhinoCar;
}());
var MastodonCarFactory = /** @class */ (function () {
    function MastodonCarFactory() {
    }
    MastodonCarFactory.prototype.makeCar = function () {
        return new MastodonCar();
    };
    return MastodonCarFactory;
}());
var RhinoCarFactory = /** @class */ (function () {
    function RhinoCarFactory() {
    }
    RhinoCarFactory.prototype.makeCar = function () {
        return new RhinoCar();
    };
    return RhinoCarFactory;
}());
function appFactory(factory) {
    var car = factory.makeCar();
    car.showCost();
}
// Use case...
appFactory(new MastodonCarFactory());
appFactory(new RhinoCarFactory());
function createFactory(type) {
    var factories = {
        mastodon: MastodonCarFactory,
        rhino: RhinoCarFactory
    };
    var factoryClass = factories[type];
    return new factoryClass();
}
appFactory(createFactory("mastodon"));
appFactory(createFactory("rhino"));
