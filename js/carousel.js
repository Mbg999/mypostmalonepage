"use strict";

// variables
let itemIndex;
let aItems;

// principal
window.addEventListener("load", function(){
    // cargar objetos carousel-item en aItems
    aItems = document.getElementsByClassName("carousel-item");
    itemIndex = aItems.length-1; // for start at the first item
    // boton prev
    document.getElementById("prev").addEventListener("click", prevItem);
    // boton next
    document.getElementById("next").addEventListener("click", nextItem);

    // automaticTransition(); // lo dejo aqui en caso de necesitarlo
    nextItem();
});

// funciones
function prevItem(){
    // ultimo item a display none
    aItems[itemIndex].classList.remove("fadeInRight", "fadeInLeft");
    itemIndex--;
    if(itemIndex < 0){
        itemIndex = aItems.length-1;
    }
    // siguiente item a display block
    
    aItems[itemIndex].classList.add("fadeInLeft");
}

function nextItem(){
    // ultimo item a display none
    aItems[itemIndex].classList.remove("fadeInRight", "fadeInLeft");
    // determinar el itemIndex actual
    if(itemIndex < aItems.length-1){
        itemIndex++;
    } else {
        // si está en el último, se regresa al primero
        itemIndex = 0;
    }
    // mostrar item
    aItems[itemIndex].classList.add("fadeInRight");
}

function automaticTransition(){
    nextItem()
    // tiempo entre transicion automatica
    setTimeout(automaticTransition, 120000); // 2min
}