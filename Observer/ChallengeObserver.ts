type ObserverOrder = () => void;

class Order {
  private orders: ObserverOrder[] = [];

  saveOrder(fn: ObserverOrder) {
    this.orders.push(fn);
  }

  deleteOrder(fnToDelete: ObserverOrder) {
    this.orders = this.orders.filter((fn) => fn !== fnToDelete);
  }

  fire() {
    this.orders.forEach((fn) => {
      fn.call(null);
    });
  }
}

// USE CASE: Client send 2 orders of Pizza.

const order = new Order();

function Mozzarella(): void {
  console.log("Pizza Mozzarella ordered ... ");
}

function Pepperoni(): void {
  console.log("Pizza Pepperoni ordered ...");
}

order.saveOrder(Mozzarella);
order.saveOrder(Pepperoni);

order.fire();
