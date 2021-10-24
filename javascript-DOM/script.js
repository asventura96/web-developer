function alteraModo() {
    alteraClasse();
    alteraTexto();
}

function alteraClasse() {
    botao.classList.toggle(classeModoEscuro);
    titulo.classList.toggle(classeModoEscuro);
    corpo.classList.toggle(classeModoEscuro);
    rodape.classList.toggle(classeModoEscuro);
}

function alteraTexto() {
    const modoClaro = "Modo Claro";
    const modoEscuro = "Modo Escuro";
    if(corpo.classList.contains(classeModoEscuro)) {
        botao.innerHTML = modoClaro;
        titulo.innerHTML = modoEscuro + " Ativo";
        return;
    }
    botao.innerHTML = modoEscuro;
    titulo.innerHTML = modoClaro + " Ativo";
}

const classeModoEscuro = 'dark-mode';
const botao = document.getElementById('seletor-modo');
const titulo = document.getElementById('titulo');
const corpo = document.getElementsByTagName('body')[0];
const rodape = document.getElementsByTagName('footer')[0];

botao.addEventListener('click', alteraModo);