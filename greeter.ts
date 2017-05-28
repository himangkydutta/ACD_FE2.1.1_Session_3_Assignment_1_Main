/**
 * The greeter class is base class which returns message.
 * @class message
 * @constructor
**/

class greeter{

    message:String;

    constructor(newMsg:String)
    {
        this.message = newMsg;
    }

    greet(){

        return this.message;
    }
}

let greetM = new greeter('Hello,please welcome');
console.log(greetM);