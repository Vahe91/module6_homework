function getSum(x) {
    return function (y) {
        return x + y;
    }
}

let sumResult = getSum(3);

console.log(sumResult(6));