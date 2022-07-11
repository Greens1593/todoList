import { setItem } from "./storage.js";
import { renderListItems } from './render.js';

const baseUrl = 'https://628e67ed368687f3e71670fd.mockapi.io/api/v1/listItem'
export const getTaskList = () =>{
    return fetch(baseUrl)
    .then(data => data.json())
}

export const createTask = (taskData) => {
   return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(taskData)
    })
}

export const changeTask = (taskId, updateTaskData) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(updateTaskData)
    })
}

export const deleteTaskData = (taskId) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'DELETE',
    })
}

export const updateTaskList = (taskList) => {
    setItem('TaskList', taskList)
    renderListItems()
}
