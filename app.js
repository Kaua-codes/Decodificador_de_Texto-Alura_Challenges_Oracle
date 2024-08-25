let mensagem;
let statusValidadeMensagem;

const expressaoRegularMinusculas = /^[a-z]+$/;

function criptografarMensagem() {
  mensagem = document.querySelector("textarea").value;
  console.log(mensagem);

  validarMensagem(mensagem);
}

function descriptografarMensagem() {
  let mensagem = document.querySelector("textarea").value;
  console.log(mensagem);
}

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function validarMensagem(mensagem) {
  statusValidadeMensagem = expressaoRegularMinusculas.test(mensagem);

  console.log("Status validade mensagem: " + statusValidadeMensagem);

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
  } else {
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
  }
}
