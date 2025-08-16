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
    listaU.appendChild(tarefa);
    
    input.value = "";
    input.focus();
    
    // Preciso pegar a const conteúdo, inseri-la dentro de uma tag <li> e inserir essa tag <li> na <ul>.
    
    // if(valor === ""){
        //     alert("Por favor, preencha o campo com uma tarefa.")
        //     input.focus();
        //     return;
        // };
        
        
        // tarefa += `<li><p class = "task">${valor}</p></li>`
        // listaU.innerHTML = tarefa;
        
        // input.value = "";
        // input.focus();
        
        
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

    botaoConclui.addEventListener('click',() => {
        console.log("Fui clicado");
    });
    return botaoConclui;

};

// Espera um evento, e o que vai acontecer
