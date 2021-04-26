Check out the code examples [here](this.js)
For the bind() method check the examples [here](bind.js)

## Global context
In the global execution context (outside of any function), this refers to the global object whether in strict mode or not.

## Function context
Inside a function, the value of this depends on how the function is called

In strict mode, if the value of this is not set when entering an execution context, it remains as undefined

In non-strict mode, if the value of this is not set by the call, this will default to the global object(window)

To set the value of this to a particular value when calling a function, use call(), or apply()

## Class context
Within a class constructor, this is a regular object. All non-static methods within the class are added to the prototype of this

## Derived classes
Derived class constructors have no initial this binding
Referring to this before calling super() will throw an error

## The bind method
The bind() method creates a new function, when invoked

The bind() method allows an object to borrow a method from another object without making a copy of that method

the bind() method doesn’t immediately execute the function. It just returns a new version of the function whose this is set to a particular value


## Arrow functions
In arrow functions, this retains the value of the enclosing lexical context's this. In global code, it will be set to the global object:


## As an object method
When a function is called as a method of an object, its this is set to the object the method is called on

## this on the object's prototype chain
The same notion holds true for methods defined somewhere on the object's prototype chain. If the method is on an object's prototype chain, this refers to the object the method was called on, as if the method were on the object

## this with a getter or setter
A function used as getter or setter has its this bound to the object from which the property is being set or gotten


## As a constructor
When a function is used as a constructor (with the new keyword), its this is bound to the new object being constructed

## As a DOM event handler
When a function is used as an event handler, its this is set to the element on which the listener is placed

## In an inline event handler
When the code is called from an inline on-event handler, its this is set to the DOM element on which the listener is placed

## this in classes
bind the class methods in the constructor so that this always refers to the class instance