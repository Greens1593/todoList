import { deleteTaskData, getTaskList } from "./getAway.js";
import { renderListItems, removeTaskList } from "./render.js";
import { setItem } from "./storage.js";

const deleteButtonDeleteAll = () => {
    const deleteAllBotton = document.querySelector('.btn__delet-all-btn')
    deleteAllBotton.remove();
}

async function deleteLoop (taskId){
    let i =0;
    while(i < taskId.length){
        await deleteTaskData(taskId[i])
        i++
    }
} 
const deleteAllDataOnDb = () => {
    getTaskList()
    .then(taskList => {
       return taskList.reduce(
            (acc, task) =>
                acc.concat(task.id), 
            [])
        })
    .then(taskId => deleteLoop(taskId))
}

export const deleteTask = (event) => {
     const isDeleteBotton = event.target.classList.contains('btn__delet-btn');
     if (!isDeleteBotton) {
         return
     };

     const taskId = event.target.dataset.id;
     deleteTaskData(taskId)
     .then(() => getTaskList())
     .then(taskList =>   {
        setItem('TaskList', taskList);
        deleteButtonDeleteAll();
        renderListItems()})
}

export const deleteAllTask = (event) => {
    const isDeleteAllBotton = event.target.classList.contains('btn__delet-all-btn');
    const listElem = document.querySelector('.list');
    if (!isDeleteAllBotton) {
        return
    };
    deleteAllDataOnDb()
    
    localStorage.removeItem('TaskList');
    removeTaskList(listElem);
    deleteButtonDeleteAll();

    setTimeout(() => {
        if (getTaskList().length !== 0){
            deleteAllDataOnDb()
        }
    }, 80000);

}
