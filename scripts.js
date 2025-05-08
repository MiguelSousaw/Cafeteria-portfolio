const modal = document.querySelector(".modal");
const mascara = document.querySelector(".mascara2");
function mostrarModal(){
    modal.classList.add("active");
    mascara.classList.add("active");
    
    if (mascara.classList.contains("fade-out")){
        mascara.classList.remove("fade-out");
        modal.classList.remove("fade-out");

        modal.classList.add("active");
        mascara.classList.add("active");
    }
}

function esconderModal(){
    modal.classList.remove("active");
    mascara.classList.remove("active");

    mascara.classList.add("fade-out");
    modal.classList.add("fade-out");
}