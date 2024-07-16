function div (arg1, arg2) {
    
    if (arg2 === 0) {
        throw new RangeError("Zero is not a valid argument.");
    }
    
    return arg1 / arg2;
}

let numbers = [10, 40, 0, 20, 50];

for (i = 0; i < numbers.length; i++) {
    let result;
    
    try {
        result = div(1000,numbers[i]);
    } catch (error) {
        result = error.message;
    }
    
    console.log(result);
}