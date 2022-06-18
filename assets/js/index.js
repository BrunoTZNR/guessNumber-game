const numAleatorio = Math.floor(Math.random() * (100 + 1)); //gera o número a ser adivinhado
console.log(numAleatorio);

var numeros = [];
var tentativas = 0;

//teste
const respostas = () => {
    console.log(numeros);
    console.log(tentativas);
}

//tocar um audio aleatorio de 1 a 10
const music = () => {
    const audio = document.querySelector('.audio');
    var numale2 = Math.floor(Math.random() * (10 - 1) + 1);
    var mp3 = `./audios/${numale2}.mp3`;
    console.log(mp3);
    audio.setAttribute('src', mp3);
    audio.play();
}

const consequencia = () => {
    const checkbox = document.querySelector('#dica-checkbox').checked;
    const dica = document.querySelector('.dica-palavra');
    const res = document.querySelector('.res');
    const input = document.querySelector('.input-number').value;

    if(checkbox == true){
        if(+input == numAleatorio){
            music(); //tocar a musica caso ganhar
        }else if(+input < numAleatorio){
            dica.innerHTML = "O número é maior!";
            res.innerHTML += " " + input;
        }else if(+input > numAleatorio){
            dica.innerHTML = "O número é menor!";
            res.innerHTML += " " + input;
        }
    }else{
        if(+input === numAleatorio){
            music();
        }else{
            res.innerHTML += " " + input;
        }
    }
    document.querySelector('.input-number').value = "";
    document.querySelector('.input-number').focus();
    tentativas += 1;
    numeros.push(input);

    respostas(); //teste
}

//dispara consequencia apertando enter ao inves de clickar no botao
addEventListener('keypress', function(e){
    if(e.key==='Enter'){
        consequencia()
    }
})