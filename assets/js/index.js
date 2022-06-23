const numAleatorio = Math.floor(Math.random() * (100 - 1) + 1); //gera o número a ser adivinhado
console.log(numAleatorio);

var j = 0;
var numeros = 0;
var tentativas = 0;

//limpar input
const limpa = () => {
    document.querySelector('.input-number').value = "";
    document.querySelector('.input-number').focus();
}

//imprime o numeros já digitados
const respostas = () => {
    var teste = `#td${numeros}`;
    var tabela=document.querySelector(teste);
    
    if(j===1){
        tabela.classList.add('acertado');
    }else{
        tabela.classList.add('acerto');
    }
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
    const checkbox = document.querySelector('#dica-checkbox');
    const res = document.querySelector('.res');
    const dica = document.querySelector('.dica-palavra');
    const input = document.querySelector('.input-number').value;

    if(+input > 100 || +input < 0 || input == 0){
        res.innerHTML = "Digite um valor entre 1 e 100!";
    }else{
        if(checkbox.checked == true){
            document.querySelector('.dica-sinal').classList.add('corzinha');
            checkbox.disabled = true;

            if(+input < numAleatorio){
                dica.innerHTML = "O número é maior!";
                numeros=input;
                // respostas();
            }else if(+input > numAleatorio){
                dica.innerHTML = "O número é menor!";
                numeros=input;
                // respostas();
            }
        }

        if(+input === numAleatorio){
            document.querySelector('.input-number').disabled = true;
            document.querySelector('.verificar').disabled = true;

            numeros=input;
            j=1;

            checkbox.disabled = true;

            music();
        }else{
            numeros=input;

            limpa();
        }
        tentativas += 1;
        respostas();
    }
}

//dispara consequencia apertando enter ao inves de clickar no botao
addEventListener('keypress', function(e){
    if(e.key==='Enter'){
        consequencia();
    }
})