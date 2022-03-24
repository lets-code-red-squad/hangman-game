const teste = document.getElementById('teste');
const btnTryAgain = document.getElementById('try-again');
const palavra = document.getElementById('palavra');
const letras = document.getElementsByClassName('letra');
const boneco = document.getElementsByClassName('boneco')[0];
let counter = 0;

const cabeca = boneco.children[0];

const meio = boneco.children[1].children;
const bracoEsquerdo = meio[0];
const tronco = meio[1];
const bracoDireito = meio[2];

const pernas = boneco.children[2].children;
const pernaEsquerda = pernas[0];
const pernaDireita = pernas[1];

const corpo = [
  cabeca,
  tronco,
  bracoEsquerdo,
  bracoDireito,
  pernaEsquerda,
  pernaDireita,
]

const palavras = [
  {
    'brasil': [
      'Um país da América',
      'O quinto maior do Mundo'
    ],
    'estados unidos': [

    ],
  },
  {
    'cachorro': [
      'mamifero',
      'caramelo',
    ],
    'gato': [
      'mamifero',
      'gosta de se limpar',
    ],
  },
  {
    'banana': [
      'amarela',
      'potássio'
    ],
    'uva': [
      'roxa',
      'bom no calor',
    ]
  },
];

const aleatoriza = (element) => Math.floor(Math.random() * element.length)
let aleatorizarTema = palavras[aleatoriza(palavras)]

btnTryAgain.onclick = () => {
  palavra.innerHTML = '';
  novaPalavra = retornaPalavra();
  risquinhos(novaPalavra);
  aleatorizarTema = palavras[aleatoriza(palavras)];
}

const erro = () => {
  if (counter === 6) {
    return 'VOCÊ PERDEU!!!'
  }

  console.log('aaa')

  corpo[counter].classList.add('show');
  counter += 1;
}

const verificaLetra = (word, letra) => {};

const trocaLetras = (word, letra) => {
  const indices = [];

  return word.map(() => word.forEach((letter, index) => letter === letra
    ? letras[index].innerHTML = letter
    : letter));
}

const retornaPalavra = () => {
  const wordKeys = palavras.map((chaves) => Object.keys(chaves));
  const wordThemes = wordKeys[aleatoriza(wordKeys)];
  const wordChosen = wordThemes[aleatoriza(wordThemes)].split('');

  return wordChosen;
}


const risquinhos = (novaPalavra) => {
  if (palavra.children.length === 0) {
    for (let i = 0; i < novaPalavra.length; i += 1) {
      const letra = document.createElement('div');
      letra.classList.add('letra');
      if (novaPalavra[i] === ' ') {
        letra.innerHTML = ' ';
      } else {
        letra.innerHTML = '_';
      }
      palavra.appendChild(letra);
    }
  }
}

let novaPalavra = retornaPalavra();
risquinhos(novaPalavra);

window.onkeydown = (event) => {
  const code = event.keyCode >= 65 && event.keyCode <= 90 || event.keyCode === 186
    ? event.key
    : '';

  trocaLetras(novaPalavra, code);
}


