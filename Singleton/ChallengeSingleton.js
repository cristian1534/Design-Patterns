var Product = /** @class */ (function () {
    function Product(id, name, cost) {
        this.id = id;
        this.name = name;
        this.cost = cost;
    }
    return Product;
}());
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this.products = [];
    }
    ShoppingCart.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    ShoppingCart.prototype.getProducts = function () {
        return this.products;
    };
    ShoppingCart.prototype.getProductById = function (id) {
        return this.products.filter(function (product) { return product.id === id; });
    };
    ShoppingCart.getInstance = function () {
        if (!ShoppingCart.instance) {
            ShoppingCart.instance = new ShoppingCart();
        }
        return ShoppingCart.instance;
    };
    return ShoppingCart;
}());
function appShoppingCart() {
    var create = ShoppingCart.getInstance();
    return create;
}
// Use case...
var bread = new Product(1, "bread", 25);
var meat = new Product(2, "meat", 45);
var clientOne = ShoppingCart.getInstance();
clientOne.addProduct(meat);
console.log("Order: ", clientOne.getProducts());
var clientTwo = ShoppingCart.getInstance();
clientTwo.addProduct(bread);
console.log("Order: ", clientTwo.getProducts());
console.log("Second Product added: ", clientOne.getProductById(2));
console.log("Second Product added: ", clientTwo.getProductById(2));
// clients instances from the same original instance:
console.log(clientOne === clientTwo); // true.
