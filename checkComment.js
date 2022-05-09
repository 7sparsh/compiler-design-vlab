const openAss1 = document.getElementById('open-ass1');
const modal_container_1 = document.getElementById('modal-container-1');
const input_1 = document.getElementById("modal-input-ass1")
const output_1 = document.getElementById("modal-output-ass1");
const close_1 = document.getElementById('close');

openAss1.addEventListener('click', ()=>{
    modal_container_1.classList.add('show');
    document.body.style.overflow="hidden";
})

close_1.addEventListener('click', ()=>{
    modal_container_1.classList.remove('show');
    document.body.style.overflow="auto";
})

// main function for comment checking

function commentCheck(){
    let inputText = input_1.value;
    let flag = 0;
    let verdict;

    if( inputText.slice(0,1)=='/'){
        if(inputText.slice(1,2)=='/')
        {
            flag=1;
        }
        else if(inputText.slice(1,2)=='*')
        {
            flag=2
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
    document.getElementById("modal-input-ass3").value = "";
    output_1.value="";
    output_2.value="";
    output_3.value="";
    // output.style.border = "";
    // output.style.display="none";
}
