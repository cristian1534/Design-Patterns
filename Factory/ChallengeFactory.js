var LGPhone = /** @class */ (function () {
    function LGPhone() {
    }
    LGPhone.prototype.stock = function () {
        console.log("Created 50 units");
    };
    return LGPhone;
}());
var IphonePhone = /** @class */ (function () {
    function IphonePhone() {
    }
    IphonePhone.prototype.stock = function () {
        console.log("Created 100 units");
    };
    return IphonePhone;
}());
var LGPhoneFactory = /** @class */ (function () {
    function LGPhoneFactory() {
    }
    LGPhoneFactory.prototype.getStock = function () {
        return new LGPhone();
    };
    return LGPhoneFactory;
}());
var IphonePhoneFactory = /** @class */ (function () {
    function IphonePhoneFactory() {
    }
    IphonePhoneFactory.prototype.getStock = function () {
        return new IphonePhone();
    };
    return IphonePhoneFactory;
}());
function appPhoneFactory(factory) {
    var phone = factory.getStock();
    phone.stock();
}
function createPhoneFactory(type) {
    var phoneFactories = {
        LG: LGPhoneFactory,
        Iphone: IphonePhoneFactory,
    };
    var phoneFactoryClass = phoneFactories[type];
    return new phoneFactoryClass();
}
// Use case...
appPhoneFactory(createPhoneFactory("Iphone"));
appPhoneFactory(createPhoneFactory("LG"));
