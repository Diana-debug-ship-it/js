function calc(operation, a, b) {
    if (operation=="add") {
        return a+b;
    }
    else if (operation=="multi") {
        return a*b;
    } else if (operation=="substraction"){
        return a-b;
    }
    return;
}
console.log(calc("multi", 1, 5));