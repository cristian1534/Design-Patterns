var Subject = /** @class */ (function () {
    function Subject() {
        this.observers = [];
    }
    Subject.prototype.subscribe = function (fn) {
        this.observers.push(fn);
    };
    Subject.prototype.unsubscribe = function (fnToRemove) {
        this.observers = this.observers.filter(function (fn) { return fn !== fnToRemove; });
    };
    Subject.prototype.fire = function () {
        this.observers.forEach(function (fn) {
            fn.call(null);
        });
    };
    return Subject;
}());
var sub = new Subject();
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
