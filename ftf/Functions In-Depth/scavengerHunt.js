var nameImprover = function (name, adj) {
return 'Col ' + name + ' Mc' + adj + ' pants';
};

$('body').hide();

myArr.forEach(function(val){ console.log(val);});

$('button').on('click', function(){
console.log('Don\'t press my buttons!');
});

// function definition

    // 1.
    // function (name, adj) {
    // return 'Col ' + name + ' Mc' + adj + ' pants';
    // };

    // 2.
    // function(val){ console.log(val);}

    // 3.
    // function(){
    // console.log('Don\'t press my buttons!');
    // }

// functioln name

    // 1.
    // nameImprover

    // 2.
    // hide

    // 3.
    // forEach

    // 4.
    // on

    // 5.
    // console.log

    // 6.
    // $

// function body

    // anything between the "{}" of function is called function body.
    // Note: function bodies don't run untill function is invoked.

// invocations/ call-time.

    // 1.
    // log()

    // 2.
    // hide()

    // 3.
    // forEach()

    // 4.
    // .on()

    // 5.
    // $()

// Arguments(A) and Parameters(P).
// parameters are variables passed during function declatation.
// Arguments are the values passed during funcion invocation/call.
    
    // 1. P
    // name, adj

    // 2. A
    // body

    // 3. A
    // function(val){ console.log(val);}

    // 4. P
    // val

    // 5. A
    // val

    // 6. A
    // button

    // 7. A
    // click, function(){console.log('Don\'t press my buttons!');}

    // 8. A
    // Don\'t press my buttons!

// Return(R)/SideEffects(S)

// sideeffects are things that are happening other than returning the value that effects something outside the function.
// if we are changing the value of an object that's in a different scope then it is a sideeffect ex:- console.log().

    // 1. R
    // return 'Col ' + name + ' Mc' + adj + ' pants';

    // 2. S
    // console.log(val);

    // 3. S
    // console.log('Don\'t press my buttons!');

    // 4. S
    // .hide();

    // Note: A big part of functional programming is to minimize side effects.