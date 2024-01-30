// const { filter } = require("lodash");

const { functions, forEach } = require("lodash");

// let fruits = ['apple', 'orange', 'banana', 'ananas', 'lemon'];
// let users = Array.of('Anna', 'Timur', 'Vika', 'Shamil', 'Ruslan', 'Danil');
// let cats = new Array('Tosya', 'Murka', 'Barsik', 'Kotleta', 'Frosya');

// let len = fruits.push('grape');
// let lastUser = users.pop();
// let usersAmount = users.unshift('Zhenya');
// let fruit = fruits.shift();

// let favoriteFruits = fruits.slice(1, 3);
// console.log(cats.splice(1, 2));
// users.splice(3, 0, 'Pavel', 'Angela');


// for (const fr of fruits) {
//     console.log(fr);
// }

// users.forEach( user => {
//     console.log(user);
// });

// let numbers = new Array();
// for (let i=0; i<10; i++) {
//     numbers.push(Math.round(Math.random()*100));
// };
// numbers.forEach(num => {
//     console.log(`Number is ${num}`);
// });

// const firstThirtyNumber = numbers.find(num => num>30);
// const indexFirstThirtyNumber = numbers.findIndex(num => num>30);
// console.log(firstThirtyNumber);

// const fruitIndex = fruits.indexOf('apple');
// console.log(users.includes('Anna'));

// const animals = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
// console.log(animals.find(animal => animal.length>7));

// let notFilteredList = [1, 11, -2, 3, -10, 4];
// let negativeNumbers = notFilteredList.filter(num => num<0);
// console.log(negativeNumbers);

// let absoluteValues = notFilteredList.map(num => Math.abs(num));
// console.log(absoluteValues);

// const sortedNumbers = notFilteredList.sort((num1, num2) => num1-num2);
// console.log(sortedNumbers);

// const names = users.concat(cats);
// console.log(names);

// const stringOfNames = names.join('|');
// console.log(stringOfNames);

const tasks = [
    { name: "wash dishes", status: 'In progress', priority: 'low' },
];

const status = {
    TO_DO: "To do",
    IN_PROGRESS: "in progress",
    DONE: "Done"
};

const priority = {
    HIGH: 'high',
    MEDIUM: 'medium',
    LOW: 'low'
};

function addTask(taskName, taskPriority) {
    tasks.push({ name: taskName, status: status.TO_DO, priority: taskPriority });
}

function showTasks() {
    tasks.forEach(task => {
        console.log(`${task.name}:\nСтатус: ${task.status}\nВажность: ${task.priority}`);
    });
}

function changeStatus(taskName, newStatus) {
    let index = tasks.findIndex(task => task.name == taskName);
    if (index != -1) {
        tasks[index].status = newStatus;
        return;
    }
    console.log("Задача не найдена");
    return;
}

function deleteTask(taskName) {
    let index = tasks.findIndex(task => task.name == taskName);
    if (index != -1) {
        tasks.splice(index, 1);
        return;
    }
    console.log("Задача не найдена");
    return;
}

function sortByPriority(taskList){
    const highPr = taskList.filter(task=>task.priority===priority.HIGH);
    const mediumPr = taskList.filter(task=>task.priority===priority.MEDIUM);
    const lowPr = taskList.filter(task=>task.priority===priority.LOW);

    return highPr.concat(mediumPr.concat(lowPr));
}

function sortTasksByStatus() {
    const toDo = new Array();
    const inProgress = new Array();
    const done = new Array();
    tasks.forEach(task => {
        if (task.status==status.TO_DO) {
            toDo.push(task);
        }
        else if (task.status==status.IN_PROGRESS) {
            inProgress.push(task);
        }
        else if (task.status==status.DONE) {
            done.push(task);
        }
    });

    const toDoSorted = sortByPriority(toDo);
    const inProgressSorted = sortByPriority(inProgress);
    const doneSorted = sortByPriority(done);

    console.log("TO DO: ");
    toDoSorted.forEach(task => console.log(`${task.name} - ${task.priority}`));
    console.log();
    console.log("IN PROGRESS: ");
    inProgressSorted.forEach(task => console.log(`${task.name} - ${task.priority}`));
    console.log();
    console.log("DONE: ");
    doneSorted.forEach(task => console.log(`${task.name} - ${task.priority}`));
    console.log();
}

addTask("Постирать вещи", priority.HIGH);
changeStatus("Постирать вещи", status.DONE);
addTask("помыть посуду", priority.MEDIUM);
addTask("купить продукты", priority.LOW);
addTask("выучить язык программирования", priority.LOW);
addTask("посадить дерево", priority.MEDIUM);
changeStatus("посадить дерево", status.DONE);
changeStatus("купить продукты", status.IN_PROGRESS);
changeStatus("выучить язык программирования", status.DONE);

// showTasks();
sortTasksByStatus();