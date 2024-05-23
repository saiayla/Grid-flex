let taskList = [];

function addTask(event) {
    event.preventDefault();
    let description = document.getElementById('description');
    if (description.value == '') {
        showMessage();
    } else {
        taskList.push(description.value);
        description.value = '';
        updateTasks();
    }
}

function closeMessage() {
    let alert = document.getElementById('alert');
    alert.style.display = 'none';
}

function showMessage() {
    let message_type = document.getElementById('message_type');
    message_type.innerText = 'Erro: ';

    let message = document.getElementById('message');
    message.innerText = 'Você precisa descrever a nova tarefa.';

    let alert = document.getElementById('alert');
    alert.style.display = 'block'; setTimeout(() => {
        closeMessage();
    }, 4000);
}

function updateTasks() {
    let divTasks = document.getElementById('tasks');
    if (taskList.length > 0) {
        let newOl = document.createElement('ol');
        button.disabled = false;

        taskList.forEach((task, index) => {
            let newLi = document.createElement('li');
            newLi.innerText = task;
            let removeButton = document.createElement('button');
            removeButton.className = 'remove-button';
            removeButton.innerText = 'Remover';
            removeButton.addEventListener('click', () => {
                removeTask(index);
            });
            newLi.appendChild(removeButton);
            newOl.appendChild(newLi);
        });
        divTasks.replaceChildren(newOl);
    }else{
        button.disabled = true;
        let p = document.createElement('p');
        p.innerText = 'Insira a primeira tarefa para começar....';
        divTasks.replaceChildren(p);
    }
}

function removeAll() {
    taskList = [];
    updateTasks();
}

function highlightTask() {
    if (taskList.length > 0) {
        let randomIndex = Math.floor((Math.random() * taskList.length) + 0);
        let randomTask = document.querySelectorAll('#tasks ol li');
        randomTask[randomIndex].style.color = 'white';
        randomTask[randomIndex].style.fontWeight = 'bold';
        randomTask[randomIndex].style.fontSize = '24px';
    }
}

function removeTask(index) {
    taskList.splice(index, 1);
    updateTasks();
}

function filterTask() {
    let searchInput = document.getElementById('search');
    let filterText = searchInput.value.toLowerCase();
    let tasks = document.querySelectorAll('#tasks ol li');
  
    let hasResult = false;
  
    tasks.forEach((task) => {
      let taskText = task.innerText.toLowerCase();
      if (taskText.includes(filterText)) {
        task.style.display = 'block';
        hasResult = true;
      }
      else {
        task.style.display = 'none'; 
      }
    });
  
    if (!hasResult) {
      let noResultText = document.createElement('p');
      noResultText.innerText = 'Não existe resultado para essa pesquisa.';
      document.getElementById('tasks').appendChild(noResultText);
    }
  }