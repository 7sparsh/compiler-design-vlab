const openAss4 = document.getElementById('open-ass4');
const modal_container_4 = document.getElementById('modal-container-4');
const input_4 = document.getElementById("modal-input-ass4")
//const output_4 = document.getElementById("modal-output-ass4");
const close_4 = document.getElementById('close-4');

openAss4.addEventListener('click', ()=>{
    modal_container_4.classList.add('show');
    document.body.style.overflow="hidden";
})

close_4.addEventListener('click', ()=>{
    modal_container_4.classList.remove('show');
    document.body.style.overflow="auto";
})

