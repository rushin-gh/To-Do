let toDoList = [];

let inputToDo = document.getElementById('toDoInput');
let displayToDo = document.getElementById('displayToDo');
let deleteToDo = document.getElementsByClassName('deleteToDo');
let updateToDo = document.getElementsByClassName('updateToDo');
let filterToDo = document.getElementById('toDoFilter');


inputToDo.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        let todo = inputToDo.value;
        if (todo) {
            let listSize = toDoList.length;
            toDoList.push(todo);
            DisplayToDo(toDoList);
        } else {
            alert('Please enter non empty To Do.')
        }
        inputToDo.value = '';
    }
});

filterToDo.addEventListener('keyup', function(event){
    let filterText = filterToDo.value;
    if (filterText) {
        let tempList = [];
        for (let item of toDoList) {
            if (item.toLowerCase().includes(filterText.toLowerCase())) {
                tempList.push(item);
            }
        }
        DisplayToDo(tempList);
    } else {
        DisplayToDo(toDoList);
    }
}) 

displayToDo.addEventListener('click', function(event) {
    if (event.target.classList.contains('delToDo')) {
        let id = event.target.id;
        let toDoIdx = id.split('-')[1];
        toDoList.splice(toDoIdx, 1);
        DisplayToDo(toDoList);
    }
});

displayToDo.addEventListener('click', function(event) {
    if (event.target.classList.contains('updToDo')) {
        let id = event.target.id;
        let toDoIdx = id.split('-')[1];
        inputToDo.value = toDoList[toDoIdx];
        toDoList.splice(toDoIdx, 1);
        DisplayToDo(toDoList);
    }
});

function DisplayToDo (showList) {
    let toDoListToShow = '';
    for (let i = 0; i < showList.length; i++) {
        toDoListToShow += 
        `<tr>
            <td>${i + 1}</td>
            <td>${showList[i]}</td>
            <td class="delToDo" id="delToDo-${i}">DEL</td>
            <td class=updToDo id="updToDo-${i}">UPD</td>
        </tr>`;
    }

    displayToDo.innerHTML = toDoListToShow;
}