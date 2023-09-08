// step 2
var LGPhoneGold = /** @class */ (function () {
    function LGPhoneGold() {
    }
    LGPhoneGold.prototype.wifi = function () {
        console.log("[LGGold] wifi on");
    };
    return LGPhoneGold;
}());
var LGPhoneSilver = /** @class */ (function () {
    function LGPhoneSilver() {
    }
    LGPhoneSilver.prototype.wifi = function () {
        console.log("[LGSilver] wifi on");
    };
    return LGPhoneSilver;
}());
var IphoneGold = /** @class */ (function () {
    function IphoneGold() {
    }
    IphoneGold.prototype.wifi = function () {
        console.log("[IPhoneGold] wifi on");
    };
    return IphoneGold;
}());
var IphoneSilver = /** @class */ (function () {
    function IphoneSilver() {
    }
    IphoneSilver.prototype.wifi = function () {
        console.log("[IphoneSilver] wifi on");
    };
    return IphoneSilver;
}());
// step 4
var GoldPhoneFactory = /** @class */ (function () {
    function GoldPhoneFactory() {
    }
    GoldPhoneFactory.prototype.createLGPhone = function () {
        return new LGPhoneGold();
    };
    GoldPhoneFactory.prototype.createIphone = function () {
        return new IphoneGold();
    };
    return GoldPhoneFactory;
}());
var SilverPhoneFactory = /** @class */ (function () {
    function SilverPhoneFactory() {
    }
    SilverPhoneFactory.prototype.createLGPhone = function () {
        return new LGPhoneSilver();
    };
    SilverPhoneFactory.prototype.createIphone = function () {
        return new IphoneSilver();
    };
    return SilverPhoneFactory;
}());
// step 5
function appPhoneFactory(factory) {
    var LG = factory.createLGPhone();
    var Iphone = factory.createIphone();
    LG.wifi();
    Iphone.wifi();
}
function createFactory(type) {
    var factories = {
        GOLD: GoldPhoneFactory,
        SILVER: SilverPhoneFactory,
    };
    var Factory = factories[type];
    return new Factory();
}
// use case...
appPhoneFactory(createFactory("GOLD"));
appPhoneFactory(createFactory("SILVER"));
