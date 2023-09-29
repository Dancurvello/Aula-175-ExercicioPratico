// Função para verificar se a checkbox está marcada
function verificarCheckbox() {
    var checkbox = document.getElementById("aceitoTermos");
    var botaoSubmit = document.querySelector("button[type='submit']");

    if (checkbox.checked) {
        botaoSubmit.removeAttribute("disabled");
    } else {
        botaoSubmit.setAttribute("disabled", "disabled");
    }
}

// Função que será executada após o carregamento do HTML
document.addEventListener("DOMContentLoaded", function() {
    // escuta o evento para verificar a checkbox sempre que ela for alterada
    var checkbox = document.getElementById("aceitoTermos");
    checkbox.addEventListener("change", verificarCheckbox);

    // Chama a função para definir o estado inicial do botão
    verificarCheckbox();
});
