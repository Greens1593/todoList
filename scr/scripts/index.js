import { createListElem } from './createTask.js';
import { updateTask } from './updateTask.js';
import { renderListItems } from './render.js';
import { deleteTask, deleteAllTask } from './deleteTask.js';
import { getTaskList, updateTaskList } from './getAway.js';

const buttonElem = document.querySelector('.create-task-btn');
buttonElem.addEventListener('click', createListElem);

const todoListElem = document.querySelector('.list');
todoListElem.addEventListener('click', updateTask);

document.addEventListener('DOMContentLoaded', getTaskList()
.then(taskList => {
    updateTaskList(taskList)}));

window.addEventListener('storage', renderListItems);

todoListElem.addEventListener('click', deleteTask);

const mainElement = document.querySelector('main')
mainElement.addEventListener('click', deleteAllTask)

