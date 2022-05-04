const openAss5 = document.getElementById('open-ass5');
const modal_container_5 = document.getElementById('modal-container-5');
const input_5 = document.getElementById("modal-input-ass5")
//const output_4 = document.getElementById("modal-output-ass4");
const close_5 = document.getElementById('close-5');

openAss5.addEventListener('click', ()=>{
    modal_container_5.classList.add('show');
    document.body.style.overflow="hidden";
})

close_5.addEventListener('click', ()=>{
    modal_container_5.classList.remove('show');
    document.body.style.overflow="auto";
})