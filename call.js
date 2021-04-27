// functionName.call(thisArg, arg1, arg2, ...);
// the first argument thisArg allows you to set the this value to any object
//  remaining arguments of the call() method arg1, arg2,… are the arguments of the function
// // The call() method calls a function functionName with a given this value and arguments

function add(a, b) { 
    return a + b;
}

let result = add.call(this, 10, 20);
console.log(result); // 30

var greeting = 'Hi';

var messenger = {
    greeting: 'Hello'
}

function say(name) {
    console.log(this.greeting + ' ' + name);
}

// If you just invoke the say() function via the call() method as follows
say.call(this,'John');
// Output: "Hi John"

// however, when you invoke the call() method of say() function and pass the messenger object as the this value
say.call(messenger,'John');
// Output: "Hello John"

// USING call() TO CHAIN CONSTRUCTOR FOR AN OBJECT

//  initialize the Box object with two properties: height and width
function Box(height, width) {
    this.height = height;
    this.width  = width;
}

//  invoke the call() method of the Box object inside the Widget object, set the this value to the Widget object
function Widget(height, width, color) {
    Box.call(this, height, width);
    this.color = color;
}

let widget = new Widget(100,200,'red');
console.log(widget);
// Outputs: Widget: { height: 100, width: 200, color: 'red' }

// USING call() FOR FUNCTION BORROWING
const car = {
    name: 'car',
    start: function() { 
        console.log('Start the ' + this.name);
    },
    speedup: function() {
        console.log('Speed up the ' + this.name)
    },
    stop: function() {
        console.log('Stop the ' + this.name);
    }
};

const aircraft = {
    name: 'aircraft',
    fly: function(){
        console.log('Fly');
    }
};

// using call() method to invoke the start() method of the car object on the aircraft
car.start.call(aircraft);
// Output: Strt the aircraft

// The typical applications of function borrowing are to use the built-in methods of the Array type
// e.g the arguments object inside a function is an array-like object, not an array object
// To use the slice() method of the Array object, you need to use the call() method

function getOddNumbers() {
    const args = Array.prototype.slice.call(arguments);
    return args.filter(num => num % 2);
}

let oddNumbers = getOddNumbers(10, 1, 3, 4, 8, 9);
console.log(oddNumbers);

// Outputs: [ 1, 3, 9 ]

// The following statement uses the call() function to set the this inside the slice() method to the arguments object and execute the slice() method
const args = Array.prototype.slice.call(arguments);