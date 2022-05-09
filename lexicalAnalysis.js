const openAss3 = document.getElementById('open-ass3');
const modal_container_3 = document.getElementById('modal-container-3');
const input_3 = document.getElementById("modal-input-ass3")
const output_3 = document.getElementById("modal-output-ass3");
const close_3 = document.getElementById('close-3');

openAss3.addEventListener('click', ()=>{
    modal_container_3.classList.add('show');
    document.body.style.overflow="hidden";
})

close_3.addEventListener('click', ()=>{
    modal_container_3.classList.remove('show');
    document.body.style.overflow="auto";
})


function lexicalAlanyzer(){

    let str= input_3.value;

    const keywordList = ["for","while","do","int","float","char","double","static","switch","case", "main", "printf", "main()"];
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    var result;
    var keywords=[];
    var specialChar=[];
    var numbers=[];
    var identifiers=[];
    
        result = str.match(/("[^"]*")|([^\s"]+)/g);
        result.map((element)=>{
            if(keywordList.includes(element)){
              keywords.push(element);
              
            }
            else if (specialChars.test(element)){
              specialChar.push(element);
              
            }
            else if (!isNaN(element)){
               numbers.push(element);
            }
            else{
              identifiers.push(element);
            }
        });
    
    
    
    // const Delimiter = [" ", ",", ";", "(", ")", "[", "]", "{", "}"];
    // const Operator = ["+", "-", "*", "/", "%", ">", "<", "="];
    // const Keywords = ["if", "else", "while", "do", "break", "continue", "int", "double", "float", "return", "char", 
    //                   "case", "sizeof", "long", "short", "typedef", "switch", "unsigned", "void", "static", "struct", "goto"];
    

    // int a,b,c; a+b=c;
    // int x=999;

    //console.log(result);
    output_3.value=result;

}