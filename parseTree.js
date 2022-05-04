const openAss6 = document.getElementById('open-ass6');
const modal_container_6 = document.getElementById('modal-container-6');
//const input_1 = document.getElementById("modal-input-ass1")
//const output_1 = document.getElementById("modal-output-ass1");
const close_6 = document.getElementById('close-6');

openAss6.addEventListener('click', ()=>{
    modal_container_6.classList.add('show');
    document.body.style.overflow="hidden";
})

close_6.addEventListener('click', ()=>{
    modal_container_6.classList.remove('show');
    document.body.style.overflow="auto";
})