const pow = (x, n) => {
    if(x < 1 || n < 1 || x % 1 !== 0 || n % 1 !== 0) {
        return 'Вы ввели не натуральные числа';
    } else {
        return x ** n;
    }
}

console.log(pow(3, 2));