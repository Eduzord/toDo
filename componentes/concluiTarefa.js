const BotaoConclui = () => {
    const botaoConclui = document.createElement('button');
    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = 'Concluir';

    botaoConclui.addEventListener('click', concluirTarefa);
    return botaoConclui;

};
const concluirTarefa = (evento) =>{
    //acessa o elemento que acionou o evento
    const eventoAcionado = evento.target;
    //acessa o elemento pai do que acionou o evento, no caso o <li>
    const tarefaCompleta = eventoAcionado.parentElement

    tarefaCompleta.classList.toggle('done'); //Devolve true ou false

};

export default BotaoConclui;