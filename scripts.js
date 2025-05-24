let form = document.getElementById('form-tarefa');
let tarefasContainer = document.querySelector('.tarefas');
let contador = document.getElementById("tarefa-concluida");
let i = 0;


function concluirTarefa(botao) {
  const card = botao.closest('article.card-tarefa');
  const titulo = card.querySelector('h2.titulo-tarefa');
  const botaoConcluir = card.querySelector('button.botao-acao');

  titulo.classList.remove("tarefa-incompleta");
  titulo.classList.add("titulo-concluida");

  const img = document.createElement('img');
  img.src = "icone.svg";
  img.alt = "Ícone de tarefa concluída";
  img.classList.add("icone-check");

  botaoConcluir.replaceWith(img);

  i++;
  contador.textContent = `${i} tarefas concluídas`;
}


form.addEventListener('submit', (event) => {
  event.preventDefault();

  let nomeTarefa = document.getElementById("nome-tarefa").value.trim();
  let tipoTarefa = document.getElementById("etiqueta-tarefa").value.trim();

  let novaTarefa = document.createElement("article");
  novaTarefa.classList.add("card-tarefa");

  novaTarefa.innerHTML = `
    <div class="info-tarefa">
      <h2 class="titulo-tarefa tarefa-incompleta">${nomeTarefa}</h2>
      <div class="detalhes-tarefa">
        <span class="etiqueta">${tipoTarefa}</span>
        <time datetime="${new Date().toISOString().slice(0, 10)}">Criado em: ${new Date().toLocaleDateString('pt-BR')}</time>
      </div>
    </div>
    <button class="botao-acao concluir-tarefa">Concluir</button>
  `;

  tarefasContainer.insertBefore(novaTarefa, tarefasContainer.firstChild);

  const botaoNovo = novaTarefa.querySelector('.concluir-tarefa');
  botaoNovo.addEventListener('click', function () {
    concluirTarefa(this);
  });

  form.reset();
});


const botoesConcluir = document.querySelectorAll('.concluir-tarefa');
botoesConcluir.forEach(botao => {
  botao.addEventListener('click', function () {
    concluirTarefa(this);
  });
});
