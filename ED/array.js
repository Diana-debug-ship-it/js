// let toDoList = ["встать","заправить кровать","сделать зарядку"];
// console.log(toDoList);
// const firstElements = toDoList[0];
// const taskCount = toDoList.length;
// const lastElement = toDoList[taskCount - 1];
// toDoList[0]="проспать";
// console.log(toDoList);
// console.log(firstElements + "->"+lastElement);
// const lastItem = toDoList.pop();//Удаляет и вовращает последний элемент
// console.log(toDoList); 
// console.log(lastItem); 
// let firstItem = toDoList.shift();//Удаляет и возвращает первый элемент
// console.log(toDoList); 
// console.log(firstItem); 
// toDoList.push('посадить цветы'); //Добавляет элемент в конец массива
// console.log(toDoList); 
// toDoList.unshift('посадить цветы');//добавляет элемент в начало массива
// console.log(toDoList);
// let firstTwoTasks = toDoList.slice(0, 2);//создает новый масси из части старого
// console.log(firstTwoTasks); 
// let deletedTask = toDoList.splice(1,1 );//Добавляет и удаляет элементы из массива по индексу
// console.log(deletedTask);
// console.log(toDoList);
// toDoList.splice(1, 0, 'заняться спортом', 'мыть окна');// Добавляет элемент по индексу
// console.log(toDoList);
// const animals = ['cat','dog', 'elephant', 'tiger', 'lion'];
// const foundAnimal = animals.find(animal=>animal.length > 7);
// console.log(foundAnimal);
// const users = [
//     { name: "Eduard", age: 22},
//     { name: "Diana", age: 20}
// ];
// const adults = users.filter(user => user.age > 18);
// const { cond } = require("lodash");
// console.log(adults);
// const numberList = [1,11,-2,3,-10,4];
// const negativeNumberList = numberList.filter( number => number<0);
// console.log(negativeNumberList);
// const absNumber = numberList.map(number => Math.abs(number));
// console.log(absNumber);
// const sortedNumber = numberList.sort((number1, number2)=> number2-number1);
// console.log(sortedNumber);
// const animals1 = ['cat', 'dog', 'elephant'];
// const animals2 = ['tiger', 'lion'];
// const animals = animals1.concat(animals2);
// console.log(animals); // ['cat', 'dog', 'elephant', 'tiger', 'lion']
const string = 'cat,dog,elephant';
const animals = string.split('e');
console.log(animals); 













