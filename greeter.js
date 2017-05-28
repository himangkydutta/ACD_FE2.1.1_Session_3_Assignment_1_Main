/**
 * The greeter class is base class which returns message.
 * @class message
 * @constructor
**/
var greeter = (function () {
    function greeter(newMsg) {
        this.message = newMsg;
    }
    greeter.prototype.greet = function () {
        return this.message;
    };
    return greeter;
}());
var greetM = new greeter('Hello,please welcome');
console.log(greetM);
