// CAPTAÇÃO DE OBJETOS HTML -------------------------------------
const btnTryAgain = document.getElementById('try-again');
const btnStart = document.getElementById('btn-start');
const palavraH = document.getElementById('palavra');
const letras = document.getElementsByClassName('letra');
const dica = document.getElementById("dica");
const jogo = document.getElementById('jogo');
const info = document.getElementById('info');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const popup = document.getElementById('popup');
const body = document.getElementsByTagName('body')[0];
const mensagem = document.createElement('p');
const derrotas = document.getElementById('derrotas');
const vitorias = document.getElementById('vitorias');
const text1 = document.getElementById('text1');

// BONECO ------------------------------------------------------
const boneco = document.getElementsByClassName('boneco')[0];
const meio = boneco.children[1].children;
const pernas = boneco.children[2].children;
const corpo = {
    cabeca: boneco.children[0],
    tronco: meio[1],
    bracoEsquerdo: meio[0],
    bracoDireito: meio[2],
    pernaEsquerda: pernas[0],
    pernaDireita: pernas[1],
};

// VARIAVEIS DE CONTROLE ---------------------------------------
let tema = '';
let palavra = '';
let riscos = [];
let textRiscos = '';
let iErro = 0;
let letrasTentadas = '';
let ok = true;
let code = '';
let infos;
let totalDerrotas = 0;
let totalVitorias = 0;
var corfundo = '';

// FUNÇÕES -----------------------------------------------------
function apresenta(mens) {
    mensagem.innerHTML = mens;
    popup.appendChild(mensagem);
    corfundo= body.style.backgroundColor
    body.style.backgroundColor = '#00000042';
    popup.style.display = 'flex';
}

function sorteia() {
    riscos = [] //limpa os riscos
    var i = 0
    var j = 0
    //soteia a palavra
    i = Math.floor(Math.random() * lista.length)
    tema = lista[i][0]
    j = Math.floor(Math.random() * lista[i][1].length)
    palavra = lista[i][1][j]
    dica.innerHTML = tema; //joga o tema na tela

    textRiscos = ''
    for (let i = 0; i < palavra.length; i++) {

        if (palavra[i] === ' ') {
            riscos.push('  ');
        } else {
            riscos.push('_');
        }
    }
    apresentaPalavra()
};

function verificaLetra(code) {
    var x = false

    for (let i = 0; i < palavra.length; i++) {
        if (code.toLowerCase() == ((palavra.substring(i, (i + 1))).normalize("NFD").replace(/[^a-zA-Zs]/g, "")).toLowerCase()) {
            riscos[i] = palavra.substring(i, (i + 1))

            x = true
        }
    }

    if (!(riscos.includes('_'))) {
        totalVitorias += 1;
        ok = false
        apresentaPalavra();
        vitorias.innerHTML = totalVitorias;
        return apresenta(`Parabéns, ${nome.value}! Você venceu!  &#x1F600`)
    }

    if (!(x)) {
        const keys = Object.keys(corpo);
        corpo[keys[iErro]].classList.add('show');
        iErro += 1;
        if (iErro == 6) {
            totalDerrotas += 1;
            ok = false
            apresentaPalavra();
            derrotas.innerHTML = totalDerrotas;
            return apresenta(`Que pena, ${nome.value}! Você perdeu &#x1F61F <br>A palavra correta é : ${palavra}`)

        }
    } else {
        apresentaPalavra()
    }

}

function apresentaPalavra() {
    palavraH.innerHTML = ''

    for (let i = 0; i < riscos.length; i++) {
        riscos[i] == '  '
            ? palavraH.innerHTML += `<pre>  </pre>`
            : palavraH.innerHTML += riscos[i] + ` `;
    }

}


// ARRAYS ----------------------------------------------------------
const lista = [
    //[tema[palavras]]
    ['País', ['Brasil', 'Estados Unidos', 'Peru', 'Holanda', 'Honduras', 'México', 'Canadá', 'Colômbia', 'Argentina', 'Inglarerra', 'Ilha de Páscoa', 'Filândia', 'Rússia', 'Ucrânia', 'Butão', 'China']],
    
    ['Animal', 
    ['cachorro', 'peixe boi', 'gato', 'baleia', 'girafa', 'hipopotamo', 'dragão de komodo', 'arara azul', 'papagaio', 'galinha', 'porco', 'vaca', 'coelho', 'sapo', 'macaco', 'mico leão dourado']],
   
    ['Fruta', 
    ['uva', 'goiaba', 'morango', 'jaca', 'abacaxi', 'maçã', 'mamão', 'melão', 'abacate', 'acerola', 'jabuticaba', 'banana', 'tamarindo', 'açaí']],
    
    ['Pessoa Famosa',
    ['Neymar','Faustão','Gusttavo Lima','Tony Ramos','Whindersson Nunes','Anitta','Paola Oliveira','Beyonce','Lionel Messi','Cristiano Ronaldo','Michael Jackson','Albert Einstein','Leonardo da Vinci','Isaac Newton']],
    
    ['Empresa Famosa',
    ['Addidas','Nike','Puma','Apple','Gucci','Coca Cola','Google','McDonalds','Burger King','Samsung','Petrobras','Microsoft','Amazon','Disney','Facebook','Netflix','Toyota']]
];

// Classes ---------------------------------------------------------

class Pessoa {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}

// EVENTOS ---------------------------------------------------------

btnTryAgain.onclick = () => {
    iErro = 0
    ok = true
    letrasTentadas = '';
    Object.values(corpo).forEach((parte) => parte.classList.remove('show'));
    sorteia();
    popup.style.display = 'none';
    body.style.backgroundColor = corfundo;
};

window.onkeydown = (event) => {
    if (ok) {
        code = event.keyCode >= 65 && event.keyCode <= 90 || event.keyCode === 186 ? event.key : '';

        if (code !== '') {
            if (letrasTentadas.indexOf(code) !== -1) {
                alert(`A letra "${code}" já foi testada. Tente outra letra.`);
            } else {
                letrasTentadas += code
                verificaLetra(code)
            }
        }
    }
}

window.onload = () => {
    ok = false;
    jogo.classList.add('hidden');
    btnStart.onclick = () => {
        if (nome.value.length >= 3 && email.value.length >= 7) {
            ok = true;
            infos = new Pessoa(nome.value, email.value);
            info.classList.add('hidden');
            jogo.classList.remove('hidden');
            text1.classList.add('hidden');
            sorteia();
        } else {
            alert('Por favor, preencha todos os campos!')
        }
    }
}
