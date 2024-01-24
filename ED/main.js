function calc(operation,a,b) {
switch (operation){
    case "add":
        return a+b ;
    case "multi":
        return a*b ;
    case "sub":
        return a-b ;
    default:
        return "Учи Матчасть"
}
}
console.log( calc("sub",5,10));