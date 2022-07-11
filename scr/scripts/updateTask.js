import { changeTask, getTaskList, updateTaskList } from "./getAway.js";

export const updateTask = (event) => {
     const isCheckbox = event.target.classList.contains('list__item-checkbox');
     if (!isCheckbox) {
         return
     }

     const taskId = event.target.dataset.id;
     const updateTask = {
        taskId,
        done: event.target.checked,
        dateOfChange: event.target.checked
        ? new Date()
        : null, 
     }
     changeTask(taskId, updateTask)
     .then(() => getTaskList())
     .then(taskList => updateTaskList(taskList))
}

