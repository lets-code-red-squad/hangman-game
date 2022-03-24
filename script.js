const teste = document.getElementById('teste');
const btnTryAgain = document.getElementById('try-again');
const palavra = document.getElementById('palavra');
const letras = document.getElementsByClassName('letra');
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
    'maça': [
      'vermelha',
      'dá fome',
    ]
  },
];

const aleatoriza = (element) => Math.floor(Math.random() * element.length)
let aleatorizarTema = palavras[aleatoriza(palavras)]

btnTryAgain.onclick = () => {
  palavra.innerHTML = '';
  risquinhos();
  aleatorizarTema = palavras[aleatoriza(palavras)];
  const novaPalavra = retornaPalavra();
}

const trocaLetras = (word, letra) => {
  const indices = [];
  console.log(word)

  const teste = word.map(() => word.forEach((letter, index) => letter === letra ? indices.push(index) : ''));
  // console.log(teste)

}


const retornaPalavra = () => {
  const wordKeys = palavras.map((chaves) => Object.keys(chaves));
  const wordThemes = wordKeys[aleatoriza(wordKeys)];
  const wordChosen = wordThemes[aleatoriza(wordThemes)].split('');

  return wordChosen;
}

const novaPalavra = retornaPalavra();

const risquinhos = () => {
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

risquinhos();

trocaLetras(retornaPalavra())
const sorteio = (word) => {
  const indices = [];
  const indicesFiltrados = indices.sort((a, b) => a - b).filter((numero, index) => indices.indexOf(numero) === index);

  return indicesFiltrados;
}

// sorteio();
window.onkeydown = (event) => {
  const code = event.keyCode >= 65 && event.keyCode <= 90
    ? event.key
    : '';

  trocaLetras(novaPalavra ,code)
}


