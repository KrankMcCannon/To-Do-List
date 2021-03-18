const btnAdd = document.getElementById('buttonAdd');
const btnCategory = document.getElementById('dropBtn');
const dropList = document.getElementById('dropDownList');
const inputAdd = document.getElementById('whatodo');

const table1 = document.getElementById('todolist1');
const table2 = document.getElementById('todolist2');
const table3 = document.getElementById('todolist3');

function dropDown() {
    dropList.classList.toggle('show');
}

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

    tdcheck.appendChild(check);
    tdname.appendChild(text);

    table1.appendChild(tr);

    inputAdd.value = '';

    check.addEventListener('change', function(e) {
        if(e.target.checked) {
            tdname.className = 'barrato';
        } else {
            tdname.className = '';
        }
    });
});
