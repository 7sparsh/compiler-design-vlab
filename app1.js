const openAss2 = document.getElementById('open-ass2');
const modal_container_2 = document.getElementById('modal-container-2');
const close_2 = document.getElementById('close-2');

openAss2.addEventListener('click', ()=>{
    modal_container_2.classList.add('show');
})

close_2.addEventListener('click', ()=>{
    modal_container_2.classList.remove('show');
})



// main function for identifier checking

function isValid()
{
    var str = document.getElementById("modal-input-ass2").value;

    // If first character is invalid
    if (!((str[0] >= 'a' && str[0] <= 'z') || (str[0]>= 'A' && str[0] <= 'Z') || str[0] == '_'))
    {
        alert("Invalid");
        return "false";
    }
  
    // Traverse the string for the rest of the characters
    for (let i = 1; i < str.length; i++)
    {
        if (!((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z') || (str[i] >= '0' && str[i] <= '9') || str[i] == '_'))
        {
            alert("Invalid");
            return false;
        }
    }
  
    // String is a valid identifier
    alert("Valid");
    return true;
}
  
// if (isValid(str, n))
//     alert("Valid");
//     //document.write("Valid");
// else
//     alert("Invalid");
//     //document.write("Invalid");