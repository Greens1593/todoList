import { createTask, getTaskList, updateTaskList } from "./getAway.js";

export const createListElem = () => {

  const inputValueElem = document.querySelector('.task-input');
  const text = inputValueElem.value;
  if (!text){
    return
  }
  inputValueElem.value = '';

  const actualTasks = {
    text,
    done: false,
    dateOfCreate: new Date (),
  };

  createTask(actualTasks)
  .then(() => getTaskList())
  .then(taskList => {
  updateTaskList(taskList)
  })
}