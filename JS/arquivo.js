const divGeral = document.getElementById("divGeral");
const nome = document.getElementById("nome");
const vportas = document.getElementById("vportas");
const vblindagem = document.getElementById("vblindagem");
const vmunicao = document.getElementById("vmunicao");
const pResultado = document.getElementById("pResultado");
const resultado = document.getElementById("resultado");
const button_enviar = document.getElementById("button_enviar");
const inputEscolhido = document.querySelectorAll('input[name="carro"]');

// Formando a classe carro para ser construida a forma de apresentar

class Carro {
  constructor(nome, portas, blindagem, municao, input) {
    this.nome = nome;
    this.portas = portas;
    this.blindagem = blindagem;
    this.municao = municao;
    this.input = input;
  }

  apresentar() {
    return `Nome: ${this.nome} <br> Portas: ${this.portas} <br> Blindagem: ${this.blindagem} <br> Munição: ${this.municao} <br> Tipo: ${this.input}`;
  }
}

// Construindo a função bloquear para "bloquear" o input blindagem ou o input munição se por acaso o input passeio estiver selecionado

function bloquear() {
  const radioSelecionado = document.querySelector(
    'input[name = "carro"]:checked'
  );

  if (radioSelecionado.value == "Passeio") {
    vblindagem.disabled = true;
    vmunicao.disabled = true;
  } else {
    vblindagem.disabled = false;
    vmunicao.disabled = false;
  }
}

// Adicionando o evento click em cada input do tipo radio para que a função bloquear funcione

inputEscolhido.forEach((radio) => {
  radio.addEventListener("click", bloquear);
});

bloquear();

// adicionando o evento de click no botão enviar

button_enviar.addEventListener("click", () => {
  const inputSelecionado = document.querySelector(
    'input[name="carro"]:checked'
  );

  // Usando o if e else para dar um alerta se por acaso alguns do input estiver vazio e se todos forem preenchidos será criado uma div chamando a classe carro com a função apresentar e mostrar na tela o resultado com as informações e o botão remover

  if (nome.value === "") {
    alert("digite Seu nome");
  } else if (vportas.value === "0") {
    alert("Digite um valor nas portas");
  } else if (!vblindagem.disabled && vblindagem.value === "0") {
    alert("Digite um valor na blindagem");
  } else if (!vblindagem.disabled && vmunicao.value === "0") {
    alert("digite um valor na munição");
  } else {
    const selecionado = inputSelecionado.value;
    const div = document.createElement("div");
    div.setAttribute("class", "recebido");
    const apresentar_carro = new Carro(
      nome.value,
      vportas.value,
      vblindagem.value,
      vmunicao.value,
      selecionado
    );

    div.innerHTML = apresentar_carro.apresentar();
    divGeral.appendChild(div);

    const button_r = document.createElement("button");
    button_r.setAttribute("class", "button_remover");
    button_r.textContent = "REMOVER";
    div.appendChild(button_r);

    button_r.addEventListener("click", () => {
      divGeral.removeChild(div);
    });
  }

  // "quando o resulta aparecer na tela dos os input voltam ao valor inicial "
  nome.value = "";
  vportas.value = "0";
  vblindagem.value = "0";
  vmunicao.value = "0";
});
