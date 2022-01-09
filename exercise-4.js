let count = 0;

setInterval((start, end) => {
    if (count <= end - start) {
        console.log(start + count);
        count++;
    } else {
        clearInterval();
    }
}, 1000, 5, 15);