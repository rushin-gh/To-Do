let toDoList = [];

let inputToDo = document.getElementById('toDoInput');
let displayToDo = document.getElementById('displayToDo');

inputToDo.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
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
        inputToDo.value = '';
    }
});