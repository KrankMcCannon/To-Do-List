const btnAdd = document.getElementById('buttonAdd');
const btnCategory = document.getElementById('dropBtn');
const dropList = document.getElementById('dropInput');
const inputAdd = document.getElementById('whatodo');

const table1 = document.getElementById('todolist1');
const table2 = document.getElementById('todolist2');
const table3 = document.getElementById('todolist3');

const tasks = document.getElementById('task');
const clearTasks = document.getElementById('clearTask');

window.onclick = function(e) {
    if(!e.target.matches('.dropBtn')) {
        const dropdowns = document.getElementsByClassName('dropdown-content');
        for(let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

btnAdd.addEventListener('click', function(e) {
    
    if(!(inputAdd.value)){
        return;
    } 
    
    let value = inputAdd.value;
    const tr = document.createElement('tr');
    const tdcheck = document.createElement('td');
    const tdname = document.createElement('td');
    tr.appendChild(tdcheck);
    tr.appendChild(tdname);
    const text = document.createTextNode(value);
    const check = document.createElement('input');
    check.type = 'checkbox';
    tdcheck.className = 'checkbox';
    tdname.className = 'todoname';

    tdcheck.appendChild(check);
    tdname.appendChild(text);

    let dropValue = dropList.value;

    if(value != -1 && dropValue == "Alta") {
        table1.appendChild(tr);
    } else if(value != -1 && dropValue == "Media") {
        table2.appendChild(tr);
    } else if(value != -1 && dropValue == "Bassa") {
        table3.appendChild(tr);
    }

    inputAdd.value = '';
    dropList.value = '';

    const countTasks = countCheckedCheckboxes().countTask;
    if(countTasks < 2) {
        tasks.innerHTML = countTasks + ' task left.';
    } else {
        tasks.innerHTML = countTasks + ' tasks left.';
    }

    check.addEventListener('change', function(e) {
        const countCheck = countCheckedCheckboxes().count;
        const countTasks = countCheckedCheckboxes().countTask;
        if(countCheck < 2) {
            clearTasks.innerHTML = 'Clear ' + countCheck + ' completed task.';
        } else {
            clearTasks.innerHTML = 'Clear ' + countCheck + ' completed tasks.';
        }
        if(countTasks < 2) {
            tasks.innerHTML = countTasks + ' task left.';
        } else {
            tasks.innerHTML = countTasks + ' tasks left.';
        }
        if(e.target.checked) {
            let linethrough = value.strike();
            tdname.innerHTML = linethrough;
        } else {
            tdname.innerHTML = value;
        }
    });
});

function countCheckedCheckboxes() {
    let count = 0;
    let countTask = 0;
    let countClear = document.getElementsByTagName('input');
    for(let i = 0; i < countClear.length; i++) {
        if(countClear[i].type === 'checkbox' && countClear[i].checked === true) {
            count++;
        } else if (countClear[i].type === 'checkbox' && countClear[i].checked === false) {
            countTask++;
        }
    }
    return {count, countTask};
}
