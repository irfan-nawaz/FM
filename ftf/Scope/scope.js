var ACTUAL;

var beforeEach = function() {
    ACTUAL = null;
};
beforeEach();

// 1.
// A functio has access to its own local scope varaiables
var r1 =  function (){
    var name  = 'inner';
    ACTUAL = name;
    return ACTUAL;
};
r1();
beforeEach();

// 2.
// inputs to a function are treated as local scope variables.
var r2 = function () {
    var fn = function (name) {
        // the name paramater belongs to the scope of its function.
        ACTUAL = name;
    };
    fn('inner');
    return ACTUAL;
};
r2();
beforeEach();

// 3.
// block scope can be created with let

var r3 = function () {
    var where = 'outer1';
    {
        let where = 'inner';
        // if instead of let it was var then the value of 'where' will be changed to inner.
    };
    ACTUAL = where;
    return ACTUAL;
};
r3();
beforeEach();

// 4.
// A function has access to the varaiables contained within the same scope in which the function was created in.

var r4 = function () {
    var name = 'outer';
    var fn = function () {
        ACTUAL = name;
    };
    fn();
    return ACTUAL;
};
r4();
beforeEach();

// 5.
// A function's local scope varaiables are not avilable anywhere outside that function.
var r5 = function () {
    var firstFn = function () {
        var localToFirstFn = 'inner';
    };
    firstFn();
    var secondFn = function () {
        ACTUAL = localToFirstFn;
    };
    secondFn();
    // here the secondFn dosen't have access to localToFirstFn as it is refercing into different sibling scope.
    return ACTUAL;
};
r5();
beforeEach();

// 6.
// A function's local scope varaiables are not avilable anywhere outside that function regardless of the context it's called in.
var r6 = function () {
    var firstFn = function () {
        var localToFirstFn = 'first';
        // although false it might seem reasonable to think that secondFn (which mentions the localToFirstFn variable), should have access to the localToFirstFn VARIABLE , since it's being called here from within the scope where that variable is declared.
        secondFn();
        // when second function is called it will look for that function in is own local scope (firstFn) and it will not find any secondFn in it's local scope so it will look in next higher scope and it will find secondFn and it will now create the execution context where the function was declared (i.e the outer scope of firstFN) so since the secondFn is running in the different sibling scope it cant access localToFirstFn from firstFn.
    };
    var secondFn = function () {
        ACTUAL = localToFirstFn;
    };
    secondFn();
    // of course calling the secondFn should throw an error in this case, since secondFn does not have access to the localToFirstFn variable.
    firstFn(); 
    // in addition, calling the firstFn (which inturn calls the secondFn) should also throw, since it the calling context of secondFn has no influence over it's scope access rules.
    return ACTUAL;
};
r6();
beforeEach();

// 7.
// if an inner/local scope and an outer scope variable share the same name and the name is refrenced in the inner scope, inner scope variable masks the variable from the outer scope with the same name. This renders the outer scope variables inaccassible from anywhere within the inner function block.
var r7 = function() {
    var sameName = 'outer';
    var fn = function() {
       // note: here we are are re-declaring the same variable if instead we do re-assigining without using var then the original value will be updated regardless in which scope it is. But here it it not being updated it is just creating a new variable within it's scope.
       var sameName = 'inner';
        ACTUAL = sameName;
    };
    fn();
    return ACTUAL;
};
r7();
beforeEach();

// 8.
// if an inner/local scope and an outer scope variable share the same name and the name is refrenced in the outer scope, the outer scope binding will be used.
var r8 = function() {
    var sameName = 'outer';
    var fn = function() {
       var sameName = 'inner';
    };
    fn();
    ACTUAL = sameName;
    return ACTUAL;
};
r8();
beforeEach();

// 9.
// a new variable scope is created for every call to a function, as exemplified with a counter.
var r9  = function() {
    // the '||' symbol here is being used to set a default value for innerCounter, If innerCounter already contains a truthy value, then the value ion that variable will be unchainged. If it is falsey however (such as if it were completely uninitialized), then this line will set it to the default value value of 10.
    var innerCounter = innerCounter || 10;
    innerCounter = innerCounter + 1;
    ACTUAL = innerCounter;
    return ACTUAL;
};
r9();
r9();
beforeEach();

// 10.
// a new variable scope is created for every call to a function, as exemplified with uninitialized string variables.
var r10 = function() {
    var localVariable;
    if(localVariable === undefined) {
        // the variable will be initalized for the first time during this call to fn
        ACTUAL = 'alpha';
    } else if (localVariable === 'initialized') {
        // the variable has already been initialized by a previous call to fn.
        ACTUAL = 'omega';
    }
    // now that actual has been set we will initialize localVariable to refer to a string
    localVariable = 'initialized';
    return ACTUAL;
};
r10();
r10();
beforeEach();

// 11.
// an inner function can access both it's local scope variables and variables in it's containing scope, provided the variables have different names.
var r11 = function() {
    var outerName = 'outer';
    var fn = function() {
        var innerName = 'inner';
        ACTUAL = innerName + outerName; 
    };
    fn();
    return ACTUAL;
};
r11();
beforeEach();

// 12.
// between calls to an inner function retains access to  a variable in an outer scope. Modifying those variables has a lasting effect between calls to the inner function.

var r12 = function () {
    var outerCounter = 10;

    var fn = function() {
        outerCounter = outerCounter + 1;
        ACTUAL = outerCounter;
    };
    fn();
    fn();
    return ACTUAL;
};
r12();
beforeEach();

// 13.
// the rule about retaining access to variables from an outer scope still applies, even after the outer function call (that created the outer scope) has returned.
var r13 = function() {
    var outerFn = function() {
        // NOTE: the contents of this function is the same as the entire body of the previous test.
        var counterInOuterScope = 10;

        var innerIncrementingFn = function() {
            counterInOuterScope = counterInOuterScope + 1;
            ACTUAL = counterInOuterScope;
        };
        innerIncrementingFn();
        innerIncrementingFn();
        // Here we retain the refrence to the newly created inner function for later, by assigning it to the global scope (window)
        window.retainedInnerFn = innerIncrementingFn; 
    };

    // before we run outerFn, there will be no innerFn exported to the global scope
    console.log(window.retainedInnerFn);
    // running this outer function should have the same effect as running the whole previous  test, with the addition of placing the innerFn somewhere that we can reach it after outerFn has returned.
    outerFn();
    console.log(window.retainedInnerFn);
    // even though the outerFn has returned once the only call to it was completed a couple of lines above, the inner remains available in the global scope and still has the access to the variables of that containing scope where it was first created.
    window.retainedInnerFn();
    return ACTUAL;
};

// note: Remember that always the scope of the function will be created where it was declared/defined, no matter from where we call it, so if we assign the function to global scope and call the function from global scope, it will still create the execution context in it's own scope where it was defined, and if it is an inner function we will still be able to acces the outer function(Higher-order function's) scope from that inner function's execution context.