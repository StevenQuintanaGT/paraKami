function hacerCrecerBotonNo() {
    var btnSi = document.getElementById('btnSi');
    btnSi.style.transform = 'scale(2.0)'; 

    var btnNo = document.getElementById('btnNo');
    btnNo.style.display = 'none';

    var h3No = document.getElementById('h3No');
    h3No.innerText="COMOOO QUE NOOOO??? PIPIPI INTENTA OTRA VEZ"
}

function redirigirAOtraPagina() {
    // Cambia la ubicación del navegador
    window.location.href = '../si.html';
}