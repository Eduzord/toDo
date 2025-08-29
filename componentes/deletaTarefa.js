const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button');
    botaoDeleta.classList.add('delete-button');
    botaoDeleta.innerText = 'Excluir';

    botaoDeleta.addEventListener('click', excluirTarefa);
    return botaoDeleta;

};


const excluirTarefa = (evento) =>{
    //acessa o elemento que acionou o evento
    const eventoAcionado = evento.target;
    //acessa o elemento pai do que acionou o evento, no caso o <li>
    const tarefaCompleta = eventoAcionado.parentElement;

    const listaDeTarefas = tarefaCompleta.parentElement;
    listaDeTarefas.removeChild(tarefaCompleta); //Devolve true ou false

};
export default BotaoDeleta;