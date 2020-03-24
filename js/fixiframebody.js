// esto solo funciona desde la ejecución de un servidor, por el tema del cors
let iframe = document.getElementById('bigView');

function restyle() {
   let body = iframe.contentDocument.body;
   body.style.padding = 0;
   body.style.margin = 0;
}

iframe.onload = restyle;
restyle();