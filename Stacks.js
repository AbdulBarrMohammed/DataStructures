//functions push, pop, peek, length

var Stack = function() {
    this.count = 0;
    this.storage = {};


    // adds value to end of stack
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    //removes and returns value at end of the stack
    this.pop = function() {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = function() {
        return this.count;
    }

    // returns the value at the end of the stack
    this.peek = function() {
        return this.storage[this.count -1];
    }


}


var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
