const numAleatorio = Math.floor(Math.random() * (100 - 1) + 1); //gera o número a ser adivinhado
console.log(numAleatorio);

var numeros = 0;
var tentativas = 0;

//limpa o input
const limpa = () => {
    document.querySelector('.input-number').value = "";
    document.querySelector('.input-number').focus();
}

//imprime qtd tentativas/o numeros já digitados
const respostas = () => {
    var teste = `#td${numeros}`;
    var tabela = document.querySelector(teste);
    
    //muda a cor do numAleatorio
    if(numeros == numAleatorio){
        tabela.classList.add('acertado');
    }else{
        tabela.classList.add('acerto');
    }

    //tentativas

}

//toca um audio aleatorio de 1 a 10
const music = () => {
    const audio = document.querySelector('.audio');
    let numale2 = Math.floor(Math.random() * (10 - 1) + 1);
    let mp3 = `./assets/audios/${numale2}.mp3`;

    console.log(mp3);
    audio.setAttribute('src', mp3);
    audio.volume = 0.2;
    audio.play();
}

const consequencia = () => {
    const checkbox = document.querySelector('#dica-checkbox');
    const res = document.querySelector('.res');
    const dica = document.querySelector('.dica-palavra');
    const input = Number(document.querySelector('.input-number').value);

    res.innerHTML = "";

    if(input > 100 || input < 0 || input == 0){
        res.innerHTML = "Digite um valor entre 1 e 100!";

        limpa();
    }else{
        if(checkbox.checked == true){
            document.querySelector('.dica-sinal').classList.add('corzinha');
            checkbox.disabled = true;

            if(+input < numAleatorio){
                dica.innerHTML = "O número é maior!";
            }else if(+input > numAleatorio){
                dica.innerHTML = "O número é menor!";
            }
        }

        if(+input === numAleatorio){
            document.querySelector('.input-number').disabled = true;
            document.querySelector('.verificar').disabled = true;

            j=1;

            checkbox.disabled = true;

            music();
        }else{
            limpa();
        }
        numeros=input;
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