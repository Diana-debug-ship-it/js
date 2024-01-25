// function calc(operation,a,b) {
// switch (operation){
//     case "add":
//         return a+b ;
//     case "multi":
//         return a*b ;
//     case "sub":
//         return a-b ;
//     default:
//         return "Учи Матчасть"
// }
// }
// console.log( calc("sub",5,10));
// while (true) {
//     console.log(34)
// for(i=1;i<=19;i++){
//     console.log(i)
// }
// const phoneBook ={
// list:{
//  "Diana": 89874213120,
//  "Eduard":  89274844965,
//  "Rararra": null
// },
// delete(){
//     delete this.list.Eduard

// },
// add(name,number){
//     this.list[name]=number;
// }
// };
// phoneBook.add("Nikita", 7132987312878);
// phoneBook.list.Rararra = 893289840429;
// phoneBook.delete();
// const result = "Diana" in phoneBook.list;
// // if (result){
// //     console.log(phoneBook.list.Diana)
// // }
// for(const key in phoneBook.list){
//     console.log(key + " - " +(phoneBook.list[key]));
// }
// ;

// // // console.log(typeof (8327823 + "3"));
// const user = {
//     name: "John",
//     age: 30
// };
// let _ = require('lodash');
// const clone = _.cloneDeep(user);
// // const clone =Object.assign({},user);
// // for(let key in user){
// //     clone[key]=user[key];
// // }
// clone.name = "Pete";
// console.log(user.name + ","+ clone.name);
const stat = {
    '1': "In Progress",
    '2': "To Do",
    '3': "Done"
};
const task = {
	list: {
    "create a new practice task": stat[2],
    "write a post": stat[1]

},
changeStatus(taskName,taskStatus){
    this.list[taskName]=taskStatus;

} ,
addTask(taskName){
    this.list[taskName]=stat[1]

}, 
deleteTask(taskName){
    delete this.list[taskName]
},
showList(){
    console.log( this.list);
    isDone = 0;
    for(taskName in this.list){
    if(this.list[task]==stat[3]){
        isDone = true};
    }
    if (!isDone){
     console.log("Нет выполненных задач");   

    }
}


};
task.changeStatus("write a post", stat[2]);
task.addTask('have a walk'); 
task.deleteTask("create a new practice task");
task.showList(); 

