const teste = document.getElementById('teste');
const btnTryAgain = document.getElementById('try-again');
const palavra = document.getElementById('palavra');
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
  aleatorizarTema = palavras[Math.floor(Math.random() * palavras.length)];
  sorteio();
}

const sorteio = () => {
  const wordKeys = palavras.map((chaves) => Object.keys(chaves));
  const wordThemes = wordKeys[aleatoriza(wordKeys)];
  const wordChosen = wordThemes[aleatoriza(wordThemes)].split('');
  const indices = [];

  for (let i = 0; )

  wordChosen.map(() => wordChosen.forEach((letter, index) => letter === 'a' ? indices.push(index) : 'letra não encontrada'));
  const indicesFiltrados = indices.sort((a, b) => a - b).filter((numero, index) => indices.indexOf(numero) === index);

  return palavras.length;
}

sorteio();

window.onkeydown = (event) => {
  const code = event.keyCode >= 65 && event.keyCode <= 90
    ? event.key
    : '';

}
