// Obtém o elemento do display para manipulação
let display = document.getElementById("display");

// Adiciona um valor ao conteúdo atual do display
function appendValue(value) {
  display.innerText += value; // Concatena o valor ao texto do display
}

// Limpa o conteúdo do display
function clearDisplay() {
  display.innerText = ""; // Define o texto como vazio
}

// Avalia a expressão matemática exibida no display
function calculate() {
  try {
    // Usa eval para calcular a expressão e exibe o resultado
    display.innerText = eval(display.innerText);
  } catch (error) {
    // Mostra "Error" se a expressão for inválida
    display.innerText = "Error";
  }
}

// Apaga o último caractere no display
function deletaUltimo() {
  let display = document.getElementById("display"); // Obtém novamente o display
  display.innerText = display.innerText.slice(0, -1); // Remove o último caractere
}

// Exibe um alerta informando que a funcionalidade não está implementada
function showNotWorkingAlert() {
  alert("A pilha está fraca! Por favor, troque ela"); // Mensagem personalizada
}
