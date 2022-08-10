//gera o número a ser adivinhado
const numAleatorio = Math.floor(Math.random() * (100 - 1) + 1);

let numeros = 0;
let tentativas = 0;
var array_numeros = [];

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
    if (numeros == numAleatorio) {
        //number aleatorio 4 a 11
        let numalesim = Math.floor(Math.random() * (11 - 3) + 4);
        music(alex = numalesim);

        tabela.classList.add('acertado');
    } else {
        //number aleatorio 1 a 3
        let numalenao = Math.floor(Math.random() * (4 - 1) + 1);
        music(alex = numalenao);

        tabela.classList.add('acerto');
    }

    //tentativas
    const tentativa_container = document.querySelector('.tentativas-container');
    const contagem = document.querySelector('.tentativas-contagem');

    tentativa_container.classList.remove('oculto');
    contagem.innerHTML = `${tentativas}`;
}

//toca um audio aleatorio de 1 a 10
const music = (alex) => {
    const audio = document.querySelector('.audio');

    let musiquinha = alex;

    console.log(musiquinha);

    let tocar = `./assets/audios/${musiquinha}.mp3`;

    audio.setAttribute('src', tocar);
    audio.volume = 0.2;
    audio.play();
}

const consequencia = () => {
    const checkbox = document.querySelector('#dica-checkbox');
    const res = document.querySelector('.res');
    const dica = document.querySelector('.dica-palavra');
    const input = Number(document.querySelector('.input-number').value);

    res.innerHTML = "";

    if (input > 100 || input < 0 || input == 0 || input == null) {
        res.innerHTML = "Digite um valor entre 1 e 100!";

        limpa();
    } else {
        if (checkbox.checked == true) {
            document.querySelector('.dica-sinal').classList.add('corzinha');
            checkbox.disabled = true;

            if (+input < numAleatorio) {
                dica.innerHTML = "O número é maior!";
            } else if (+input > numAleatorio) {
                dica.innerHTML = "O número é menor!";
            }
        }

        if (+input === numAleatorio) {
            document.querySelector('.input-number').disabled = true;
            document.querySelector('.verificar').disabled = true;

            j = 1;

            checkbox.disabled = true;
        } else {
            limpa();
        }
        numeros = input;
        tentativas += 1;
        array_numeros.push(input);
        respostas();
    }
}

//dispara consequencia apertando enter ao inves de clickar no botao
addEventListener('keypress', function (e) {
    const inputzada = document.querySelector('.verificar').disabled;

    if (e.key === 'Enter' && inputzada == false) {
        consequencia();
    }
})