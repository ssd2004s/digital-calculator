let display = document.querySelector('#inputBox');
let buttons = document.querySelectorAll('button');

//Node list ko array me convert karna he to usko Array.from(variable jo bhe ho chacha/chachi/iyer)
let buttonsArray = Array.from(buttons);
// console.log(buttonsArray[5].innerHTML);

let string = '';


buttonsArray.forEach( btn => {
    // console.log(btn);
    btn.addEventListener('click', e =>{
        // console.log(event);
        // console.log(e.target.innerHTML);

        if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            display.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
           string = '';
           display.value = string;
        }

        else if(e.target.innerHTML == '='){
            string = eval(string);
            display.value = string
        }

        else{   
            string += e.target.innerHTML;
            display.value = string;
        }
    })
})