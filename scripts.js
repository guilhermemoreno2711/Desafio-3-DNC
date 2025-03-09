/* document.addEventListener("DOMContentLoaded", function () {
    const nomeTarefa = document.getElementById("nome-tarefa");
    const tipoTarefa = document.getElementById("tipo-tarefa");
    const botaoTarefa = document.getElementById("botao-tarefa");
    const cardsContainer = document.querySelector(".cards");
    const tarefaConcluida = document.getElementById("tarefa-concluida");
    let tarefasConcluidas = 1;

    botaoTarefa.addEventListener("click", function (event) {
        event.preventDefault();
        const nome = nomeTarefa.value.trim();
        const tipo = tipoTarefa.value.trim();

        if (nome === "") return;

        const novaTarefa = document.createElement("div");
        novaTarefa.classList.add("card-tarefa");
        novaTarefa.innerHTML = `
            <div class="info-task">
                <h2>${nome}</h2>
                <div class="task-label">
                    <label>${tipo}</label>
                    <p>Criado em: ${new Date().toLocaleDateString("pt-BR")}</p>
                </div>
            </div>
            <div>
                <button class="botao-acao concluir-tarefa">concluir</button>
            </div>
        `;

        cardsContainer.appendChild(novaTarefa);
        nomeTarefa.value = "";
        tipoTarefa.value = "";

        adicionarEventoConclusao(novaTarefa.querySelector(".concluir-tarefa"));
    });

    function adicionarEventoConclusao(botao) {
        botao.addEventListener("click", function () {
            botao.closest(".card-tarefa").remove();
            tarefasConcluidas++;
            tarefaConcluida.textContent = `${tarefasConcluidas} tarefa(s) concluída(s)`;
        });
    }

    document.querySelectorAll(".concluir-tarefa").forEach(adicionarEventoConclusao);
});
 */
const nomeTarefa = document.getElementById("nome-tarefa");
const tipoTarefa = document.getElementById("tipo-tarefa");
const adcTarefa = document.getElementById("botao-tarefa");



