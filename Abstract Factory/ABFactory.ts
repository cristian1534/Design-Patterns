// step 1
interface LGPhone {
  wifi(): void;
}

interface Iphone {
  wifi(): void;
}

type PhoneType = "GOLD" | "SILVER";

// step 2
class LGPhoneGold implements LGPhone {
  wifi(): void {
    console.log("[LGGold] wifi on");
  }
}
class LGPhoneSilver implements LGPhone {
  wifi(): void {
    console.log("[LGSilver] wifi on");
  }
}

class IphoneGold implements Iphone {
  wifi(): void {
    console.log("[IPhoneGold] wifi on");
  }
}
class IphoneSilver implements Iphone {
  wifi(): void {
    console.log("[IphoneSilver] wifi on");
  }
}

// step 3
interface PhoneAbstractFactory {
  createLGPhone(): LGPhone;
  createIphone(): Iphone;
}

// step 4
class GoldPhoneFactory implements PhoneAbstractFactory {
  createLGPhone(): LGPhone {
    return new LGPhoneGold();
  }
  createIphone(): Iphone {
    return new IphoneGold();
  }
}

class SilverPhoneFactory implements PhoneAbstractFactory {
  createLGPhone(): LGPhone {
    return new LGPhoneSilver();
  }
  createIphone(): Iphone {
    return new IphoneSilver();
  }
}

// step 5
function appPhoneFactory(factory: PhoneAbstractFactory) {
  const LG: LGPhone = factory.createLGPhone();
  const Iphone: Iphone = factory.createIphone();

  LG.wifi();
  Iphone.wifi();
}

function createFactory(type: PhoneType): PhoneAbstractFactory {
  const factories = {
    GOLD: GoldPhoneFactory,
    SILVER: SilverPhoneFactory,
  };

  const Factory = factories[type];
  return new Factory();
}

// use case...
appPhoneFactory(createFactory("GOLD"));
appPhoneFactory(createFactory("SILVER"));
