interface ProductBase {
  stock(): void;
}

interface PhoneFactory {
  getStock(): ProductBase;
}

type PhoneType = "LG" | "Iphone";

class LGPhone implements ProductBase {
  stock(): void {
    console.log("Created 50 units");
  }
}

class IphonePhone implements ProductBase {
  stock(): void {
    console.log("Created 100 units");
  }
}

class LGPhoneFactory implements PhoneFactory {
  getStock(): ProductBase {
    return new LGPhone();
  }
}

class IphonePhoneFactory implements PhoneFactory {
  getStock(): ProductBase {
    return new IphonePhone();
  }
}

function appPhoneFactory(factory: PhoneFactory) {
  const phone: ProductBase = factory.getStock();
  phone.stock();
}

function createPhoneFactory(type: PhoneType) {
  const phoneFactories = {
    LG: LGPhoneFactory,
    Iphone: IphonePhoneFactory,
  };
  const phoneFactoryClass = phoneFactories[type];
  return new phoneFactoryClass();
}

// Use case...
appPhoneFactory(createPhoneFactory("Iphone"));
appPhoneFactory(createPhoneFactory("LG"));
