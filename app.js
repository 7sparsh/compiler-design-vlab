const openAss1 = document.getElementById('open-ass1');
const modal_container_1 = document.getElementById('modal-container-1');
const input = document.getElementById("modal-input-ass1")
const output = document.getElementById("modal-output-ass1");
const close = document.getElementById('close');

openAss1.addEventListener('click', ()=>{
    modal_container_1.classList.add('show');
})

close.addEventListener('click', ()=>{
    modal_container_1.classList.remove('show');
})

// main function for comment checking

function commentCheck(){
    let inputText = input.value;
    let flag = 0;
    let verdict;

    if( inputText.slice(0,1)=='/'){
        if(inputText.slice(1,2)=='/'){
            //console.log("Single line command");
            // alert(`${inputText} is a single line comment.`);
            flag=1;
            //return "Single line command";
        }
        else if(inputText.slice(1,2)=='*'){
            //console.log("Multiple line command");
            // alert(`${inputText} is a multiple line comment.`);
            flag=2
            //return "Multiple line command";
        }
        else{
            //console.log("Not a command");
            // alert(`${inputText} is not a comment.`);
            //return "Not a command";
        }
    }
    else{
        //console.log("Not a command");
        // alert(`${inputText} is not a comment.`);
        //return "Not a command";
    }
    if(flag===0){
        verdict=`${ inputText}: is not a comment`
    }
    else if(flag===1){
        verdict=`${ inputText}: is a single line comment`
    }
    else{
        verdict=`${ inputText}: is a multiple line comment`
    }
    if(inputText.length===0){
        output.value=" Please enter a string";
    }
    else{
        output.value=verdict;
    }
}



// clear text field

function ClearFields() {
    document.getElementById("modal-input-ass1").value = "";
    document.getElementById("modal-input-ass2").value = "";
    output.value="";
    // output.style.border = "";
    // output.style.display="none";
}
