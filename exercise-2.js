function isPrimeNum(num) {
    if (num > 1000 || num === 0 || num === 1) {
        return 'Данные неверны';
    } else if (num === 2) {
        return 'Число является простым';
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i !== 0) {
                return 'Число является простым';
            } else {
                return 'Число не является простым'
            }
        }
    }
}

console.log(isPrimeNum(53));