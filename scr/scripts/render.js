import { getItem } from "./storage.js";

export const removeTaskList = (taskList) =>{
  while (taskList.firstChild){
    taskList.removeChild(taskList.firstChild)
  };
}

const compareTasks = (a, b) => {
  if (a.done - b.done !== 0) {
      return a.done - b.done;
  };
  if (a.done){
    return new Date(a.dateOfChange) - new Date(b.dateOfChange);
  }
  else{
    return new Date(b.dateOfCreate) - new Date (a.dateOfCreate);
  }
};

const createTaskElem = (task) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');
  if (task.done){
  listItemElem.classList.add('list__item_done');
  }
  return listItemElem
};

const createCheckboxElem = (task) => {
  const checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.setAttribute('data-id', task.id);
  checkboxElem.checked = task.done;
  checkboxElem.classList.add('list__item-checkbox');
  return checkboxElem
}
const createDeleteButtonElem = (task) => {
  const deletButton = document.createElement('button');
  const buttonName = document.createTextNode('Удалить');
  deletButton.appendChild(buttonName);
  deletButton.setAttribute('data-id', task.id);
  deletButton.classList.add('btn__delet-btn');  
  return deletButton
}

const createDeleteAllButtonElem = () => {
  const todoListElem = document.querySelector('main')
  const deletAllButton = document.createElement('button');
const nameOfButton = document.createTextNode('Удалить все'); 
deletAllButton.appendChild(nameOfButton);
deletAllButton.classList.add('btn__delet-all-btn');  
todoListElem.append(deletAllButton);
}

export const renderListItems = () => {
  const listElem = document.querySelector('.list');
  const taskList = getItem('TaskList');
  const deleteAllBotton = document.querySelector('.btn__delet-all-btn')

  try {
  if (taskList.length !== 0 && deleteAllBotton===null){
    createDeleteAllButtonElem()
  }
}
finally {  
  removeTaskList(listElem);

  const listItems = taskList
  .sort(compareTasks)
  .map(task => {
    const listItemElem = createTaskElem(task);
    const checkboxElem = createCheckboxElem(task);
    const deletButton = createDeleteButtonElem(task)
 
  listItemElem.append(checkboxElem, task.text, deletButton);

  return listItemElem
  });

  listElem.append(...listItems);
}}
