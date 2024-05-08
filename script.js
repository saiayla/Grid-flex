console.log('Olá! Eu estou funcionando.');

function calcular () {
  let n1= document.getElementById('n1').value;
  let n2 = document.getElementById('n2').value;
  let op = document.getElementById('operation').value;
  let soma = parseInt(n1) + parseInt(n2);
  let subtrair = parseInt(n1) - parseInt(n2);
  let multiplicar = parseInt(n1) * parseInt(n2);
  let dividir = parseInt(n1) / parseInt(n2);

  if(op == "somar") {
    alert('A soma foi ' + soma);
  }
  else if(op == "subtrair") {
    alert('A subtração foi ' + subtrair);
  }
  else if(op == "multiplicar") {
    alert('A multiplicação foi ' + multiplicar);
  }
  else if(op == "dividir") {
    alert('A divisão foi ' + dividir);
  }
};
