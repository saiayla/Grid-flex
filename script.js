function addTask(e) {
    e.preventDefault();
    let tarefa = document.getElementById('task');

    if(tarefa.value.trim() != '') {
        let novo_li = document.createElement('li');
        novo_li.innerText = tarefa.value;

        let lista = document.getElementById('tasklist');
        lista.appendChild(novo_li);
        tarefa.value='';

        let message = document.getElementById('message');
        message.innerText = 'Sucesso: Tarefa incluída!' ;
        message.className = 'sucess-message';
    } else {
        let message = document.getElementById('message');
        message.innerText = 'Erro: Preencha a descrição da tarefa!' ;
        message.className = 'error-message'; 
   }
};

function clearMessage() {
    let message = document.getElementById('message');
    message.innerHTML = '&nbsp;';
}
