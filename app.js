let mensagem;
let statusValidadeMensagem;
let chavesCriptografia = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};
let chavesDescriptografia = {
  enter: "e",
  imes: "i",
  ai: "a",
  ober: "o",
  ufat: "u",
};

const expressaoRegularMinusculas = /^[a-z]+$/;

function criptografarMensagem() {
  mensagem = document.querySelector("textarea").value;
  console.log("Mensagem original: " + mensagem);

  validarMensagem(mensagem);
  console.log("Status validade mensagem: " + statusValidadeMensagem);

  if (statusValidadeMensagem) {
    let mensagemCriptografada = substituirLetra(mensagem, chavesCriptografia);
    console.log("Mensagem criptografada: " + mensagemCriptografada);
  } else {
    limparTextarea();
  }
}

function descriptografarMensagem() {
  mensagem = document.querySelector("textarea").value;
  console.log("Mensagem original: " + mensagem);

  validarMensagem(mensagem);
  console.log("Status validade mensagem: " + statusValidadeMensagem);

  if (statusValidadeMensagem) {
    let mensagemDescriptografada = substituirTexto(
      mensagem,
      chavesDescriptografia
    );
    console.log("Mensagem descriptografada: " + mensagemDescriptografada);
  } else {
    limparTextarea();
  }
}

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function substituirLetra(textoOriginal, substituicoes) {
  let textoModificado = "";

  for (let i = 0; i < textoOriginal.length; i++) {
    let letraAtual = textoOriginal[i];

    if (substituicoes[letraAtual]) {
      textoModificado += substituicoes[letraAtual];
    } else {
      textoModificado += letraAtual;
    }
  }
  return textoModificado;
}

function substituirTexto(textoOriginal, substituicoes) {
  let textoModificado = textoOriginal;

  // Percorre todas as substituições e as aplica no texto original
  for (let [chave, valor] of Object.entries(substituicoes)) {
    let regex = new RegExp(chave, "g");
    textoModificado = textoModificado.replace(regex, valor);
  }

  return textoModificado;
}

function validarMensagem(mensagem) {
  statusValidadeMensagem = expressaoRegularMinusculas.test(mensagem);

  if (statusValidadeMensagem) {
    // Seleciona o parágrafo de classe home-page__conteiner-input__others__alert
    let alertaParagrafo = document.querySelector(
      ".home-page__conteiner-input__others__alert"
    );

    // Seleciona a imagem dentro do parágrafo
    let alertaImagem = alertaParagrafo.querySelector("img");

    // Altera o atributo 'src' da imagem
    alertaImagem.src = "/assets/check-circle-fill.svg";

    // Altera o texto do parágrafo, mantendo a imagem
    alertaParagrafo.innerHTML = `<img src="${alertaImagem.src}" alt="Logo de check"/> Texto valido.`;
  } else if (mensagem != "") {
    // Seleciona o parágrafo de classe home-page__conteiner-input__others__alert
    let alertaParagrafo = document.querySelector(
      ".home-page__conteiner-input__others__alert"
    );

    // Seleciona a imagem dentro do parágrafo
    let alertaImagem = alertaParagrafo.querySelector("img");

    // Altera o atributo 'src' da imagem
    alertaImagem.src = "/assets/exclamation-circle-fill.svg";

    // Altera o texto do parágrafo, mantendo a imagem
    alertaParagrafo.innerHTML = `<img src="${alertaImagem.src}" alt="Logo de alerta"/> Apenas letras minúsculas e sem acento.`;
  } else {
    // Seleciona o parágrafo de classe home-page__conteiner-input__others__alert
    let alertaParagrafo = document.querySelector(
      ".home-page__conteiner-input__others__alert"
    );

    // Seleciona a imagem dentro do parágrafo
    let alertaImagem = alertaParagrafo.querySelector("img");

    // Altera o atributo 'src' da imagem
    alertaImagem.src = "/assets/bi_exclamation-circle-fill.svg";

    // Altera o texto do parágrafo, mantendo a imagem
    alertaParagrafo.innerHTML = `<img src="${alertaImagem.src}" alt="Logo de alerta"/> Apenas letras minúsculas e sem acento.`;
  }
}

function limparTextarea() {
  mensagem = document.querySelector("textarea");
  mensagem.value = "";
}
