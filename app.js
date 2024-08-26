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

    habilitarOutput();

    exibirTextoNaTela(
      "home-page__conteiner-output__text-found__text",
      mensagemCriptografada
    );
  } else {
    limparCampo("textarea");
    desabilitarOutput();
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

    habilitarOutput();

    exibirTextoNaTela(
      "home-page__conteiner-output__text-found__text",
      mensagemDescriptografada
    );
  } else {
    limparCampo("textarea");
    desabilitarOutput();
  }
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

  // Ordenar as chaves pelas maiores substituições primeiro para evitar substituições parciais
  let chavesOrdenadas = Object.keys(substituicoes).sort(
    (a, b) => b.length - a.length
  );

  // Aplicar substituições baseadas na ordem das chaves
  chavesOrdenadas.forEach((chave) => {
    let regex = new RegExp(chave, "g");
    textoModificado = textoModificado.replace(regex, substituicoes[chave]);
  });

  return textoModificado;
}

function exibirTextoNaTela(classe, texto) {
  let campo = document.querySelector(`.${classe}`);
  campo.innerHTML = texto;
}

function limparCampo(campo) {
  mensagem = document.querySelector(campo);
  mensagem.value = "";
}

function habilitarOutput() {
  document.querySelector(
    ".home-page__conteiner-output__no-text-found"
  ).style.display = "none";

  document.querySelector(
    ".home-page__conteiner-output__text-found"
  ).style.display = "flex";

  return;
}

function desabilitarOutput() {
  document.querySelector(
    ".home-page__conteiner-output__no-text-found"
  ).style.display = "flex";

  document.querySelector(
    ".home-page__conteiner-output__text-found"
  ).style.display = "none";

  return;
}
