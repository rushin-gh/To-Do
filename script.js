let toDoList = [];

let inputToDo = document.getElementById('toDoInput');
let displayToDo = document.getElementById('displayToDo');
let deleteToDo = document.getElementsByClassName('deleteToDo');
let updateToDo = document.getElementsByClassName('updateToDo');

inputToDo.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        let todo = inputToDo.value;
        if (todo) {
            let listSize = toDoList.length;
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

displayToDo.addEventListener('click', function(event) {
    if (event.target.classList.contains('updToDo')) {
        let id = event.target.id;
        let toDoIdx = id.split('-')[1];
        inputToDo.value = toDoList[toDoIdx];
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
            <td class="delToDo" id="delToDo-${i}">DEL</td>
            <td class=updToDo id="updToDo-${i}">UPD</td>
        </tr>`;
    }

    displayToDo.innerHTML = toDoListToShow;
}