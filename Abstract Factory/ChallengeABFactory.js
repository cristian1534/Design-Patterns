// step 2
var Phone = /** @class */ (function () {
    function Phone() {
    }
    Phone.prototype.setSeries = function (series) {
        console.log("Setting series for Phone", series);
    };
    Phone.prototype.setCapacityInGB = function (capacity) {
        console.log("Setting capacity in GB for Phone", capacity);
    };
    Phone.prototype.setResolution = function (resolution) {
        console.log("Setting resolution for Phone", resolution);
    };
    return Phone;
}());
var Laptop = /** @class */ (function () {
    function Laptop() {
    }
    Laptop.prototype.setSeries = function (series) {
        console.log("Setting series for Phone", series);
    };
    Laptop.prototype.setCapacityInGB = function (capacity) {
        console.log("Setting capacity in GB for Phone", capacity);
    };
    Laptop.prototype.setResolution = function (resolution) {
        console.log("Setting resolution for Phone", resolution);
    };
    return Laptop;
}());
var Tablet = /** @class */ (function () {
    function Tablet() {
    }
    Tablet.prototype.setSeries = function (series) {
        console.log("Setting series for Phone", series);
    };
    Tablet.prototype.setCapacityInGB = function (capacity) {
        console.log("Setting capacity in GB for Phone", capacity);
    };
    Tablet.prototype.setResolution = function (resolution) {
        console.log("Setting resolution for Phone", resolution);
    };
    return Tablet;
}());
// step 3
var ProductFactory = /** @class */ (function () {
    function ProductFactory() {
    }
    ProductFactory.prototype.createPhone = function () {
        return new Phone();
    };
    ProductFactory.prototype.createLaptop = function () {
        return new Laptop();
    };
    ProductFactory.prototype.createTablet = function () {
        return new Tablet();
    };
    return ProductFactory;
}());
// step 5
function appProductFactory(factory) {
    var CPU = factory.createPhone();
    var Laptop = factory.createLaptop();
    var Tablet = factory.createLaptop();
    CPU.setSeries("abc");
    Laptop.setCapacityInGB(32);
    Tablet.setResolution("15'");
}
function createProductFactory(type) {
    var factories = {
        Phone: ProductFactory,
        Laptop: ProductFactory,
        Tablet: ProductFactory,
    };
    var Factory = factories[type];
    return new Factory();
}
// use case...
appProductFactory(createProductFactory("Laptop"));
appProductFactory(createProductFactory("Phone"));
appProductFactory(createProductFactory("Tablet"));
