const { findIndex, forEach } = require("lodash");

const taskList = [
    { name: "create a new practice task", status: "In Progress" },
    { name: "write a post", status: "To Do" }
];
const stat = {
    IN_PROGRESS: "In Progress",
    TO_DO: "To Do",
    DONE: "Done"
};
function changeStatus(taskName, taskStatus) {
    IsPoss = false;
    taskList.forEach(task => {
        if (taskName === task.name) {
            task.status = taskStatus;
            IsPoss = true;
            return;
        };
    });
    if (IsPoss == false) {
        throw new Error("Нет подходящей задачи");
    };
};
function addTask(taskName) {
        if (taskName.length < 3 || taskName.length > 30) {
            throw new Error("Не соответствует критерриям ввода");

        }
        else { taskList.push({ name: taskName, status: stat.TO_DO }) };
    };
;
function deleteTask(taskName) {
    const index = taskList.indexOf(taskName);
    taskList.splice((index - 1), 1);
};
function showList() {
    console.log(taskList)
};

function showListByCategory() {
    const todo = taskList.filter(task => task.status == stat.TO_DO);
    console.log(stat.TO_DO + ":");
    todo.forEach(task => console.log(`${task.name}`));
    const inprog = taskList.filter(task => task.status == stat.IN_PROGRESS);
    console.log(stat.IN_PROGRESS + ":");
    inprog.forEach(task => console.log(`${task.name}`));
    const done = taskList.filter(task => task.status == stat.DONE);
    console.log(statS.DONE + ":");
    done.forEach(task => console.log(`${task.name}`));
};
changeStatus("create a new practice task", "Done");
addTask("go");
deleteTask("write a post");
showList();
showListByCategory();


