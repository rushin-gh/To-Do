let toDoList = [];

let todoAddBtn = document.getElementById('addToDo');
let inputToDo = document.getElementById('toDoInput');
let displayToDo = document.getElementById('displayToDo');

todoAddBtn.addEventListener('click', function() {
    let todo = inputToDo.value;
    if (todo) {
        toDoList.push(todo);
        
        let toDoListToShow = '';
        for (let todo of toDoList) {
            toDoListToShow += (`<li>${todo}</li>`);
        }

        displayToDo.innerHTML = toDoListToShow;
    } else {
        alert('Please enter non empty To Do.')
    }
});