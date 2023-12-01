document.addEventListener('DOMContentLoaded', function () {
let inputElement = document.querySelector('[data-entry]')
let submitButton = document.querySelector('[data-submit]')
let sortButton = document.querySelector('[data-sort]')
let tasks = []

    inputElement.addEventListener('input', capitalizeFirstLetter)
    submitButton.addEventListener('click', submitTask)
    sortButton.addEventListener('click', function () {
    sortTasks(sortButton.dataset.order);
    })
        
function capitalizeFirstLetter() {
    let inputValue = inputElement.value
    if (inputValue.length > 0) {
        let capitalizedText = inputValue.charAt(0).toUpperCase() + inputValue.slice(1)
        inputElement.value = capitalizedText;
        }
    }
function submitTask() {
        let task = inputElement.value
        if (task.trim() !== '') {
            tasks.push(task)
            renderTasks()
            inputElement.value = ''
        }
    }
function sortTasks(taskList) {
    if (taskList == 'asc') {
            tasks.sort()
        } 
    else if (taskList == 'desc') {
            tasks.sort().reverse()
        }
        renderTasks()
    }

function renderTasks() {
    let taskList = document.getElementById('taskList')
    if (taskList) {
            taskList.innerHTML = ''

    for (let i = 1; i < tasks.length; i++) {
            let listItem = document.createElement('li')
                listItem.textContent = tasks[i]
                taskList.appendChild(listItem)
            }

        }
    }
})

