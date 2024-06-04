let contagemCliqueEsquerdo = 0;
let contagemCliqueDireito = 0;
let contagemCliqueCentral = 0;
let contagemScroll = 0;

const contadorCliqueEsquerdo = document.getElementById('contagemCliqueEsquerdo');
const contadorCliqueDireito = document.getElementById('contagemCliqueDireito');
const contadorCliqueCentral = document.getElementById('contagemCliqueCentral');
const contadorScroll = document.getElementById('contagemScroll');
const cliqueArea = document.getElementById('click-area');

cliqueArea.addEventListener('mousedown', function (event) {
    switch (event.button) {
        case 0:
            contagemCliqueEsquerdo++;
            contadorCliqueEsquerdo.textContent = contagemCliqueEsquerdo;
            break;
        case 1:
            contagemCliqueCentral++;
            contadorCliqueCentral.textContent = contagemCliqueCentral;
            break;
        case 2:
            contagemCliqueDireito++;
            contadorCliqueDireito.textContent = contagemCliqueDireito;
            break;
        default:
            break;
    }
});

cliqueArea.addEventListener('wheel', function (event) {
    contagemScroll++;
    contadorScroll.textContent = contagemScroll;
})

function resetar() {
    contagemCliqueEsquerdo = 0;
    contagemCliqueDireito = 0;
    contagemCliqueCentral = 0;
    contagemScroll = 0;

    contadorCliqueEsquerdo.textContent = '';
    contadorCliqueDireito.textContent = '';
    contadorCliqueCentral.textContent = '';
    contadorScroll.textContent = '';
}