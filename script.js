function incluir() {
    let description = document.getElementById('description');

    if(description.value = '') {
        let message_type = docunt.getElementById('message_type');
        message_type_type.innerText = 'Erro';

        let message = document.getElementById('message');
        message.ineerText = 'Você precisa descrever a nova tarefa.';  
        
        let alert = document.getElementById('alert');
        alert.style.display = 'block';
;    }
}

function closeMessage() {
    let alert = document.getElementById('alert');
    alert.style.display = 'none'
}