type ObserverFunction = () => void;

class Subject {
  private observers: ObserverFunction[] = [];

  subscribe(fn: ObserverFunction) {
    this.observers.push(fn);
  }

  unsubscribe(fnToRemove: ObserverFunction) {
    this.observers = this.observers.filter((fn) => fn !== fnToRemove);
  }

  fire() {
    this.observers.forEach((fn) => {
      fn.call(null);
    });
  }
}

const sub = new Subject();

function testOne() {
  console.log("Test One running...");
}
function testTwo() {
  console.log("Test Two running...");
}

// Use case...
sub.subscribe(testOne);
sub.subscribe(testTwo);
sub.fire();
