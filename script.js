// Eventos - 
//Qual tipo? - click
//E o que vai acontecer? - nova tarefa
//Onde irá ocorrer? - button
const listaU = document.querySelector("[data-ullist]");

const novaTarefa = document.querySelector("[data-form-button]");


// Evento

const criarTarefa = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const valor = input.value;
    console.log(valor);

}

novaTarefa.addEventListener('click', criarTarefa);

// Espera um evento, e o que vai acontecer
