const numAleatorio = Math.floor(Math.random() * (100 + 1)); //gera o número a ser adivinhado
// console.log(numAleatorio);

var numeros = [];
var tentativas = 0;

//imprime o numeros já digitados
const respostas = () => {
    const res = document.querySelector('.res');
    res.innerHTML = numeros.join('-');
}

//tocar um audio aleatorio de 1 a 10
const music = () => {
    const audio = document.querySelector('.audio');
    var numale2 = Math.floor(Math.random() * (10 - 1) + 1);
    var mp3 = `./assets/audios/${numale2}.mp3`;
    console.log(mp3);
    audio.setAttribute('src', mp3);
    audio.play();
}

const consequencia = () => {
    const checkbox = document.querySelector('#dica-checkbox').checked;
    const dica = document.querySelector('.dica-palavra');
    const res = document.querySelector('.res');
    const input = document.querySelector('.input-number').value;

    if(+input > 100 || +input < 0){
        res.innerHTML = "Digite um valor entre 0 e 100!";
        document.querySelector('.input-number').value = "";
        document.querySelector('.input-number').focus();
    }else{
        if(checkbox == true){
            if(+input == numAleatorio){
                music(); //tocar a musica caso ganhar
            }else if(+input < numAleatorio){
                dica.innerHTML = "O número é maior!";
                numeros.push(input);
                respostas();
            }else if(+input > numAleatorio){
                dica.innerHTML = "O número é menor!";
                numeros.push(input);
                respostas();
            }
        }else{
            if(+input === numAleatorio){
                music();
            }else{
                numeros.push(input);
                respostas();
            }
        }
        document.querySelector('.input-number').value = "";
        document.querySelector('.input-number').focus();
        tentativas += 1;
    }
}

//dispara consequencia apertando enter ao inves de clickar no botao
addEventListener('keypress', function(e){
    if(e.key==='Enter'){
        consequencia()
    }
})