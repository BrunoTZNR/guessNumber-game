//gera o número a ser adivinhado
const numAleatorio = Math.floor(Math.random() * (100 + 1));
console.log(numAleatorio);

function consequencia(){
    const checkbox = document.querySelector('#dica-checkbox').checked;
    const dica = document.querySelector('.dica-palavra');
    const res = document.querySelector('.res');
    const input = document.querySelector('.input-number').value;
    console.log(input);

    if(checkbox == true){
        if(+input == numAleatorio){
            alert('Você ganhou!!');
        }else if(+input < numAleatorio){
            dica.innerHTML = "O número é maior!"
            res.innerHTML += " " + input;
        }else if(+input > numAleatorio){
            dica.innerHTML = "O número é menor!"
            res.innerHTML += " " + input;
        }
    }else{
        if(+input === numAleatorio){
            alert('Você ganhou!!');
        }else{
            res.innerHTML += " " + input;
        }
    }
}

