const openAss1 = document.getElementById('open-ass1');
const modal_container_1 = document.getElementById('modal-container-1');
const close = document.getElementById('close');

openAss1.addEventListener('click', ()=>{
    modal_container_1.classList.add('show');
})

close.addEventListener('click', ()=>{
    modal_container_1.classList.remove('show');
})
