const openAss2 = document.getElementById('open-ass2');
const modal_container_2 = document.getElementById('modal-container-2');
const close_2 = document.getElementById('close-2');

openAss2.addEventListener('click', ()=>{
    modal_container_2.classList.add('show');
})

close_2.addEventListener('click', ()=>{
    modal_container_2.classList.remove('show');
})