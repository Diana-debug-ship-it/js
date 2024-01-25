const _ = require('lodash');
// function calc(operation, a, b) {
//     if (operation=="add") {
//         return a+b;
//     }
//     else if (operation=="multi") {
//         return a*b;
//     } else if (operation=="substraction"){
//         return a-b;
//     }
//     return;
// }
// console.log(calc("multi", 1, 5));

// while (true) {
//     console.log(34);
// }

// const phonebook = {
//     list:{
//         "A":1,
//         "B":3,
//         "C":5,
//         "D":null
//     },
//     log(){
//         console.log(this.list)
//     },
//     delete(){
//         delete this.list.B;
//     },
//     update(){
//         this.list.D=3333333;
//     },
//     add(name, number){
//         this.list[name]=number;
//     },
//     iterate(){
//         for (const key in this.list) {
//             console.log(key);
//             console.log(this.list[key]);
//         }
//     }
// }

// if (phonebook.list.A) console.log("Буква А имеется в наличии");

// console.log("E" in phonebook.list);
// console.log("D" in phonebook.list);

// phonebook.add(
//     "E", 999999999
// )
// phonebook.update();
// phonebook.delete();
// phonebook.log();

// phonebook.iterate();

// const Mike = "Mike";
// const Pete = "Pete"

// const user = {
//     name:"Anton",
//     age:30,
//     dogs:{
//         dog1:"belka",
//         dog2:"strelka"
//     }
// };

// const a = _.cloneDeep(user);

// console.log(a);

const status = {
    "1": "To do",
    "2": "in progress",
    "3": "Done"
};

const tasks = {
    list: {
        "что-то сделать":status[2],
    },
    addTask(task) {
        this.list[task] = status[1];
    },
    deleteTask(task) {
        if (task in this.list) {
            delete this.list[task];
        } else {
            console.log("Такой таски нет")
        }
    },
    show(){
        if (!tasks.list) console.log("Список задач пуст");
        let isDone = false;
        console.log("Ваши задачи: ")
        for (task in this.list) {
            console.log(task+ " - " + this.list[task]);
            if (tasks.list[task]==status[3]){
                isDone = true;
            }
        }
        if (!isDone) {
            console.log("Nothing is Done");
        }
    },
    changeStatus(task, newStatus){
        if (task in this.list) {
            this.list.task = newStatus;
        } else {
            console.log("Такой таски нет");
        }
    }
}

tasks.show();
tasks.addTask("убрать комнату", status[1]);
tasks.addTask("помыть посуду", status[2]);
tasks.addTask("купить продукты", status[2]);
tasks.addTask("выучить язык программирования", status[2]);
tasks.addTask("посадить дерево", status[1]);
tasks.show();
tasks.deleteTask("убрать комнату");
tasks.changeStatus("посадить дерево", status[3]);
tasks.show();