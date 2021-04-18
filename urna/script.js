let seuvoto = document.querySelector('.d_1_1 span');
let cargo = document.querySelector('.d_1_2 span');
let descricao = document.querySelector('.d_1_4');
let aviso = document.querySelector('.d_2');
let lateral = document.querySelector('.d_1_right');
let numeros = document.querySelector('.d_1_3');

let etapaAtual = 0;
let numero = '';
let votoBranco = false;
let votos = [];

function comecarEtapa() {
    let etapa = etapas[etapaAtual];
    let numeroHtml = '';
    numero = '';
    votoBranco = false;

    for (let i=0; i<etapa.numeros; i++) {
        if (i === 0) {
            numeroHtml += '<div class="numero pisca"></div>';
        } else {
            numeroHtml += '<div class="numero"></div>';
        }
    }

    seuvoto.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;

}   
function atualizaInterface() {
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item)=>{
        if (item.numero === numero) {
            return true;
        } else {
            return false;
        }
    });
    if (candidato.length > 0) {
        candidato = candidato[0];
        seuvoto.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = `Nome: ${candidato.nome}<br>Partido: ${candidato.partido}`;

        let fotosHtml = '';
        for (let i in candidato.fotos) {
            if (candidato.fotos[i].small) {
                fotosHtml += `<div class='d_right_img small'><img src="images/${candidato.fotos[i].url}"><span>${candidato.fotos[i].legenda}</span></div>`;
            } else {
                fotosHtml += `<div class='d_right_img'><img src="images/${candidato.fotos[i].url}"><span>${candidato.fotos[i].legenda}</span></div>`;
            }
        }

        lateral.innerHTML = fotosHtml;
    } else {
        seuvoto.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = "<div class='aviso_grande pisca'>VOTO NULO!!</div>";
    }
}
function clicou(n) {
    let elnumero = document.querySelector('.numero.pisca');
    if (elnumero !== null) {
        elnumero.innerHTML = n;
        numero = `${numero}${n}`;

        elnumero.classList.remove('pisca');
        if (elnumero.nextElementSibling !== null) {
            elnumero.nextElementSibling.classList.add('pisca');
        } else {
            atualizaInterface();
        }
    }
}
function branco() {
    if (numero === '') {
        votoBranco = true;
        seuvoto.style.display = 'block';
        aviso.style.display = 'block';
        numeros.innerHTML = '';
        descricao.innerHTML = "<div class='aviso_grande pisca'>VOTO EM BRANCO!!</div>";
    } else {
        alert('Para votar em BRANCO, você não pode ter digitado nenhum numero!,   CLIQUE EM CORRIGE ');
    }
}
function corrige() {
    comecarEtapa();
}
function confirma() {
    let etapa = etapas[etapaAtual];
    let votoConfirmado = false;

    if (votoBranco === true) {
        votoConfirmado = true;
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: 'branco'
        });
    } 
    else if(numero.length === etapa.numeros) {
        votoConfirmado = true;
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: numero
        });
    }

    if (votoConfirmado) {
        etapaAtual++;
        if (etapas[etapaAtual] !== undefined) {
            comecarEtapa();
        } else {
            document.querySelector('.tela').innerHTML = `<div class="aviso_gigante pisca">FIM!!<div class="aviso_small">Vereador: ${votos[0].voto}<br> Prefeito: ${votos[1].voto}</bre></div></div>`;
        }
    }

}

comecarEtapa();