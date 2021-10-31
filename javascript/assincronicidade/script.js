const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document. getElementById('carregaGato');
const catImg = document.getElementById('gato');

const pegaGatos = async () => {
    try {
        const dados = await fetch(BASE_URL);
        const json = await dados.json();

        return json.webpurl;
    } catch(e) {
        console.log(e.message);
    }
};

const carregaImg = async () => {
    catImg.src = await pegaGatos();
}

catBtn.addEventListener('click', carregaImg);

carregaImg();