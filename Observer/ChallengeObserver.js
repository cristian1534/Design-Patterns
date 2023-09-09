var Order = /** @class */ (function () {
    function Order() {
        this.orders = [];
    }
    Order.prototype.saveOrder = function (fn) {
        this.orders.push(fn);
    };
    Order.prototype.deleteOrder = function (fn) {
        this.orders = this.orders.filter(function (fnToDelete) { return fn !== fnToDelete; });
    };
    Order.prototype.fire = function () {
        this.orders.forEach(function (fn) {
            fn.call(null);
        });
    };
    return Order;
}());
// USE CASE: Client send 2 orders of Pizza.
var order = new Order();
function Mozzarella() {
    console.log("Pizza Mozzarella ordered ... ");
}
function Pepperoni() {
    console.log("Pizza Pepperoni ordered ...");
}
order.saveOrder(Mozzarella);
order.saveOrder(Pepperoni);
order.fire();
