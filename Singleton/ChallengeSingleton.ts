class Product {
  constructor(public id: number, public name: string, public cost: number) {}
}

class ShoppingCart {
  static instance: ShoppingCart;
  products: Product[];

  private constructor() {
    this.products = [];
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.filter((product) => product.id === id);
  }

  static getInstance() {
    if (!ShoppingCart.instance) {
      ShoppingCart.instance = new ShoppingCart();
    }
    return ShoppingCart.instance;
  }
}

function appShoppingCart() {
  const create = ShoppingCart.getInstance();
  return create;
}

// Use case...
const bread = new Product(1, "bread", 25);
const meat = new Product(2, "meat", 45);

const clientOne = ShoppingCart.getInstance();
clientOne.addProduct(meat);
console.log("Order: ", clientOne.getProducts());

const clientTwo = ShoppingCart.getInstance();
clientTwo.addProduct(bread);
console.log("Order: ", clientTwo.getProducts());

console.log("Second Product added: ", clientOne.getProductById(2));
console.log("Second Product added: ", clientTwo.getProductById(2));

// clients instances from the same original instance:
console.log(clientOne === clientTwo); // true.
