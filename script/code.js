document.addEventListener('DOMContentLoaded', function () {
    let inputElement = document.querySelector('[data-entry]')
    let submitButton = document.querySelector('[data-submit]')
    let sortButton = document.querySelector('[data-sort]')

    inputElement.addEventListener('input', capitalizeFirstLetter)
    submitButton.addEventListener('click', submitTask)
    sortButton.addEventListener('click', sortTasks)

function capitalizeFirstLetter() {
    let inputValue = inputElement.value
        if (inputValue.length > 0) {
        let capitalizedText = inputValue.charAt(0).toUpperCase() + inputValue.slice(1)
            inputElement.value = capitalizedText;
        }
    }

function sortTasks() {

    alert('Sorting tasks...')
    }
})
