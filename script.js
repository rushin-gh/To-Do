let toDoList = [];

let inputToDo = document.getElementById('toDoInput');
let displayToDo = document.getElementById('displayToDo');
let deleteToDo = document.getElementsByClassName('deleteToDo');

inputToDo.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        let todo = inputToDo.value;
        if (todo) {
            toDoList.push(todo);
            DisplayToDo();
        } else {
            alert('Please enter non empty To Do.')
        }
        inputToDo.value = '';
    }
});

displayToDo.addEventListener('click', function(event) {
    if (event.target.classList.contains('delToDo')) {
        let id = event.target.id;
        let toDoIdx = id.split('-')[1];
        toDoList.splice(toDoIdx, 1);
        DisplayToDo();
    }
});

function DisplayToDo () {
    let toDoListToShow = '';
    for (let i = 0; i < toDoList.length; i++) {
        toDoListToShow += 
        `<tr>
            <td>${i + 1}</td>
            <td>${toDoList[i]}</td>
            <td></td>
            <td class="delToDo" id="delToDo-${i}"></td>
        </tr>`;
    }

    displayToDo.innerHTML = toDoListToShow;
}