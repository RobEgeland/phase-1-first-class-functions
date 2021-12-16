function receivesAFunction(callback) {
    return 4 + callback();
}

receivesAFunction(function() {return 10 + 10})

function returnsANamedFunction() {
    return function add (num1, num2) {
        return num1 + num2
    };
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log('hello')
    }
}