const openAss1 = document.getElementById('open-ass1');
const modal_container_1 = document.getElementById('modal-container-1');
const close = document.getElementById('close');

openAss1.addEventListener('click', ()=>{
    modal_container_1.classList.add('show');
})

close.addEventListener('click', ()=>{
    modal_container_1.classList.remove('show');
})

function commentCheck()
{
    var name = document.getElementById("modal-input-ass1").value;

    if( name.slice(0,1)=='/')
    {
        if(name.slice(1,2)=='/')
            //console.log("Single line command");
            alert("Single line command");
            //return "Single line command";

        else if(name.slice(1,2)=='*')
            //console.log("Multiple line command");
            alert("Multiple line command");
            //return "Multiple line command";

        else
            //console.log("Not a command");
            alert("Not a command");
            //return "Not a command";
    }

    else
        //console.log("Not a command");
        alert("Not a command");
        //return "Not a command";
}
