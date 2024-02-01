function createCounter(){
    let count = 0;
    count++;
    return;
};
let counterA = createCounter();
let counterB = createCounter();
console.log(counterA());
console.log(counterA());
console.log(counterA());
console.log(counterB());