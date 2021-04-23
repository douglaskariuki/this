// GLOBAL CONTEXT
// In web browsers, the window object is also the global object
// console.log(this === window); // true
console.log(this); // {}


// FUNCTION CONTEXT
function f1() {
    return this;
}
console.log(f1() === globalThis) // true

function f2() {
    'use strict'; 
    return this;
}
console.log(f2()); // this is 'undefined'

// CLASS CONTEXT
// Almost similar to functions, since classes are functions under the hood
// this is a regular object. All non-static methods within the class are added to the prototype of this

class Example {
    constructor() {
      const proto = Object.getPrototypeOf(this);
      console.log(proto)
      console.log(Object.getOwnPropertyNames(proto));
    }
    
    first(){}
    second(){}
    static third(){}
}

const eg = new Example();
console.log(eg) // ['constructor', 'first', 'second']
// Static methods are not properties of this. They are properties of the class itself

// DERIVED CLASSES
// Derived classes must not return before calling super(), unless they return an Object or have no constructor at all

class Base {}
class Good extends Base {}
class AlsoGood extends Base {
  constructor() {
    return {a: 5};
  }
}
class Bad extends Base {
  constructor() {}
}

const a = new Good();
const b = new AlsoGood();
// const c = new Bad(); // ReferenceError

// ARROW FUNCTIONS
//  In global code, it will be set to the global object

var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject); // true

// AS AN OBJECT METHOD
// this is set to the object the method is called on

var obj = {
    prop: 37,
    f: function() {
      return this.prop;
    }
};

console.log(obj.f())

// THIS ON THE OBJECT'S PROTOTYPE CHAIN
// this refers to the object the method was called on, as if the method were on the object

var obj1 = {func: function() { return this.num1 + this.num2; }};
var obj2 = Object.create(obj1);
obj2.num1 = 1;
obj2.num2 = 4;

console.log(obj2.func()); // 5

// THIS WITH A GETTER OR SETTER
function sum() {
    return this.a + this.b + this.c;
}
  
var obj = {
    a: 1,
    b: 2,
    c: 3,
    get average() {
      return (this.a + this.b + this.c) / 3;
    }
};

Object.defineProperty(
    obj, 
    'sum', 
    {
        get: sum, 
        enumerable: true, 
        configurable: true
    }
);

console.log(`Average: ${obj.average}, Sum: ${obj.sum}`) // Average: 2, Sum: 6

// AS A CONSTRUCTOR
// this is bound to the new object being constructed

/*
 * Constructors work like this:
 *
 * function MyConstructor(){
 *   // Actual function body code goes here.
 *   // Create properties on |this| as
 *   // desired by assigning to them.  E.g.,
 *   this.fum = "nom";
 *   // et cetera...
 *
 *   // If the function has a return statement that
 *   // returns an object, that object will be the
 *   // result of the |new| expression.  Otherwise,
 *   // the result of the expression is the object
 *   // currently bound to |this|
 *   // (i.e., the common case most usually seen).
 * }
 */

function C() {
    this.a = 37;
}
  
var o = new C();
console.log(o.a); // 37
  
function C2() {
    this.a = 37;
    return {a: 38};
}
  
o = new C2();
console.log(o.a); // 38

// THIS IN CLASSES
class Car {
    constructor() {
      // Bind sayBye but not sayHi to show the difference
      this.sayBye = this.sayBye.bind(this);
    }

    sayHi() {
      console.log(`Hello from ${this.name}`);
    }

    sayBye() {
      console.log(`Bye from ${this.name}`);
    }

    get name() {
      return 'Ferrari';
    }
}

class Bird {
    get name() {
      return 'Tweety';
    }
}

const car = new Car();
const bird = new Bird();

// The value of 'this' in methods depends on their caller
car.sayHi(); // Hello from Ferrari
bird.sayHi = car.sayHi;
bird.sayHi(); // Hello from Tweety

// For bound methods, 'this' doesn't depend on the caller
bird.sayBye = car.sayBye;
bird.sayBye();  // Bye from Ferrari