const openAss2 = document.getElementById('open-ass2');
const modal_container_2 = document.getElementById('modal-container-2');
const input_2 = document.getElementById("modal-input-ass2")
const output_2 = document.getElementById("modal-output-ass2");
const close_2 = document.getElementById('close-2');

openAss2.addEventListener('click', ()=>{
    modal_container_2.classList.add('show');
    document.body.style.overflow="hidden";
})

close_2.addEventListener('click', ()=>{
    modal_container_2.classList.remove('show');
    document.body.style.overflow="auto";
})



// main function for identifier checking

function isValid()
{
    let str = input_2.value;
    //let verdict;

    // If first character is invalid
    // if(str.length==0)
    //     output_2.value=`Empty string`
    
    if(str.length===0){
        output_2.value=" Please enter a string";
        return false;
    }

    else if (!((str[0] >= 'a' && str[0] <= 'z') || (str[0]>= 'A' && str[0] <= 'Z') || str[0] == '_'))
    {
        output_2.value=`${str} - is an Invalid Identifier`;
        return false;
    }
  
    // Traverse the string for the rest of the characters
    for (let i = 1; i < str.length; i++)
    {
        if (!((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z') || (str[i] >= '0' && str[i] <= '9') || str[i] == '_'))
        {
            output_2.value=(`${str} - is an Invalid Identifier`);
            return false;
        }
    }
  
    // String is a valid identifier
    output_2.value=(`${str} - is a Valid Identifier`);
    return true;
}
