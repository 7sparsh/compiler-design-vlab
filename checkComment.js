const openAss1 = document.getElementById('open-ass1');
const modal_container_1 = document.getElementById('modal-container-1');
const input_1 = document.getElementById("modal-input-ass1")
const output_1 = document.getElementById("modal-output-ass1");
const close_1 = document.getElementById('close');

openAss1.addEventListener('click', ()=>{
    modal_container_1.classList.add('show');
})

close_1.addEventListener('click', ()=>{
    modal_container_1.classList.remove('show');
})

// main function for comment checking

function commentCheck(){
    let inputText = input_1.value;
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
    }
    
    if(flag===0){
        verdict=`${inputText} - is not a comment`
    }
    else if(flag===1){
        verdict=`${inputText} - is a single line comment`
    }
    else{
        verdict=`${inputText} - is a multiple line comment`
    }
    //output_1.value=verdict;

    if(inputText.length===0){
        output_1.value=" Please enter a string";
    }
    else{
        output_1.value=verdict;
    }
}



// clear text field

function ClearFields() {
    document.getElementById("modal-input-ass1").value = "";
    document.getElementById("modal-input-ass2").value = "";
    output_1.value="";
    output2.value="";
    // output.style.border = "";
    // output.style.display="none";
}
