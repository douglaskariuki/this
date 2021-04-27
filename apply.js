// The Function.prototype.apply() method allows you to call a function with a given this value and arguments provided as an array
// accpts two arguments 
// i.e fn.apply(thisArg, [args]);

// The thisArg is the value of this provided for the call to the function fn
// The args argument is an array that specifies the arguments of the function fn

// apply() is similar to the call() method except that it takes the arguments of the function as an array instead of the individual arguments

// e.g you have a person object
const person = {
    firstName: 'John',
    lastName: 'Doe'
}

// and a function greet() where we reference an object that has the firstname property,
// function also accpts 2 parameters: greeting and message
function greet(greeting, message) {
    return `${greeting} ${this.firstName}. ${message}`;
}

// with the apply method we call the greet() function and set this to the person object
let result = greet.apply(person, ['Hello', 'How are you?']);

console.log(result);

// Output: Hello John. How are you?

// FUNCTION BORROWING
// The apply() method allows an object to borrow the method of another object
// e.g you have a computer object

const computer = {
    name: 'MacBook',
    isOn: false,
    turnOn() {
        this.isOn = true;
        return `The ${this.name} is On`;
    },
    turnOff() {
        this.isOn = false;
        return `The ${this.name} is Off`;
    }
};

// and a server object
const server = {
    name: 'Dell PowerEdge T30',
    isOn: false
};

// The server object doesn’t have the turnOn() and turnOff() methods
// you can use the apply() method to execute the turnOn() method 
// of the computer object on the server object

let result = computer.turnOn.apply(server);

console.log(result);
// Output: The Dell PowerEdge T30 is On

// USING APPLY TO APPEND AN ARRAY TO ANOTHER

let arr = [1, 2, 3];
let numbers = [4, 5, 6];

arr.push.apply(arr, numbers);

console.log(arr);

// Array.prototype.concat() method also provides the same result except that it returns the new array instead of modifying the original array
