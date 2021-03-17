const btnAdd = document.getElementById('buttonAdd');

btnAdd.addEventListener('click', function(e) {
    const inputAdd = document.getElementById('whatodo');
    
    if(inputAdd.value) {
        let value = inputAdd.value;
        const li = document.createElement('li');
        const text = document.createTextNode(value);
        const check = document.createElement('input');
        check.type = 'checkbox';

        li.appendChild(check);
        li.appendChild(text);

        const ul = document.getElementById('todolist');
        ul.appendChild(li);

        inputAdd.value = "";

        check.addEventListener('change', function(e) {
            if(e.target.checked) {
                li.className = 'barrato';
            } else {
                li.className = '';
            }
        })
    }
})
