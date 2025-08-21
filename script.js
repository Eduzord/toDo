// Eventos - 
//Qual tipo? - click
//E o que vai acontecer? - nova tarefa
//Onde irá ocorrer? - button





// let tarefa = ""




const criarTarefa = (evento) => {
    evento.preventDefault();
    const listaU = document.querySelector("[data-ullist]");
    const input = document.querySelector("[data-form-input]");
    const valor = input.value;

     if(valor === ""){
            alert("Por favor, preencha o campo com uma tarefa.")
            input.focus();
            return;
        };

    const tarefa = document.createElement("li");
    tarefa.classList.add('task');
    const conteudo = `<p class="content">${valor}</p>`;

    tarefa.innerHTML = conteudo;
    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta());
    listaU.appendChild(tarefa);
    
    input.value = "";
    input.focus();
    
    // Preciso pegar a const conteúdo, inseri-la dentro de uma tag <li> e inserir essa tag <li> na <ul>.
    
    }
    // Evento
    
    // `createElement()` -> Cria um novo elemento
    // `appendChild()` -> Insere uma tag filho no tag pai.
    
const btnNovaTarefa = document.querySelector("[data-form-button]");
btnNovaTarefa.addEventListener('click', criarTarefa);

const BotaoConclui = () => {
    const botaoConclui = document.createElement('button');
    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = 'Concluir';

    botaoConclui.addEventListener('click', concluirTarefa);
    return botaoConclui;

};
const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button');
    botaoDeleta.classList.add('delete-button');
    botaoDeleta.innerText = 'Excluir';

    botaoDeleta.addEventListener('click', excluirTarefa);
    return botaoDeleta;

};

const concluirTarefa = (evento) =>{
    //acessa o elemento que acionou o evento
    const eventoAcionado = evento.target;
    //acessa o elemento pai do que acionou o evento, no caso o <li>
    const tarefaCompleta = eventoAcionado.parentElement

    tarefaCompleta.classList.toggle('done'); //Devolve true ou false

};

const excluirTarefa = (evento) =>{
    //acessa o elemento que acionou o evento
    const eventoAcionado = evento.target;
    //acessa o elemento pai do que acionou o evento, no caso o <li>
    const tarefaCompleta = eventoAcionado.parentElement;

    const listaDeTarefas = tarefaCompleta.parentElement;
    listaDeTarefas.removeChild(tarefaCompleta); //Devolve true ou false

};


// Espera um evento, e o que vai acontecer
