const arr = [0, 12, 2, 11, 23, null, {}, undefined, Infinity];

function getSortElements(arr) {
    let evenItem = 0;
    let oddItem = 0;
    let zeroItem = 0;
    let anotherItem = 0;

    arr.forEach(item => {
        if (typeof(item) === 'number') {
            if (item === 0) {
                zeroItem++;
            } else if (item % 2 === 0) {
                evenItem++;
            }  else if (item % 2 !== 0 && item !== Infinity && item !== -Infinity) {
                oddItem++;
            } else {
                anotherItem++;
            }
        } else {
            anotherItem++;
        }
    })
    
    console.log(`Количество четных элементов: ${evenItem}`);
    console.log(`Количество нечетных элементов: ${oddItem}`);
    console.log(`Количество нулевых элементов: ${zeroItem}`);
    console.log(`Количество других элементов: ${anotherItem}`);
}

getSortElements(arr);