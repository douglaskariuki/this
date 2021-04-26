// The bind() method

// The bind() method returns a new function, when invoked, has its this sets to a specific value

/*
 * fn.bind(thisArg[, arg1[, arg2[, ...]]])
   // Unlike the call() and apply() methods, the bind() method doesn’t immediately execute the function. 
   // It just returns a new version of the function whose this sets to thisArg argument
   // and arguments (arg1, arg2, …).
*/

let person = {
    name: 'John Doe',
    getName: function() {
        console.log(this.name);
    }
};

setTimeout(person.getName, 1000);// returns undefined
// This is because setTimeout() received the function person.getName separately from the person object

// if we also try
// let f = person.getName;
// setTimeout(f, 1000); // lost person context
// The this inside the setTimeout() function is set to the global object in non-strict mode and undefined in the strict mode

// To fix the issue, you can wrap the call to the person.getName method in an anonymous function
setTimeout(function () {
    person.getName();
}, 1000);
// This works because it gets the person from the outer scope and then calls the method getName()

// Or we can also use the bind() method
let f = person.getName.bind(person);
setTimeout(f, 1000);

// WE CAN ALSO USE bind() TO BORROW METHODS FROM A DIFFERENT OBJECT

let runner = {
    name: 'Runner',
    run: function(speed) {
        console.log(this.name + ' runs at ' + speed + ' mph.');
    }
};

let flyer = {
    name: 'Flyer',
    fly: function(speed) {
        console.log(this.name + ' flies at ' + speed + ' mph.');
    }
};

// If you want the flyer object to be able to run, you can use the bind() method to create the run() function with the this  sets to the flyer object
let flyerRun = runner.run.bind(flyer, 20);
// Call the bind() method of the runner.run() method and pass in the flyer object as the first argument and speed as the second argument
flyerRun();

