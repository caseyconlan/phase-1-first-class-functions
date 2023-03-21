function receivesAFunction(satisfyTest) {
    satisfyTest();
}
function satisfyTest() {
    console.log("Get a checkmark for this test")
}

function returnsANamedFunction() {
    return function namedFunction() {
        console.log("ugh")
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("Code runs!")
    }
}
