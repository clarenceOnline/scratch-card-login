
let form = document.querySelector('form');

let input = document.querySelector("input");

let label = document.querySelector("label");

let codes;

// let codes = ['10062140','10107995','10109481','10325417','10362316','10381588'];

// localStorage.setItem('codes', JSON.stringify(codes));

// $(document).ready(function(){
//         $.getJSON("/codes.json", function(result){
//             let stringCodes = JSON.stringify(result);
//             let codes = JSON.parse(stringCode);
//             alert(codes);
//     });
    
// });



document.addEventListener('DOMContentLoaded', loadJSON);

form.addEventListener('submit', authenticateAndRedirect);

 

 
 function loadJSON() {
     
    $.getJSON("./codes.json", function(json) {
        codes = json;
    });
}


function authenticateAndRedirect(e) {

    if(codes.indexOf(input.value) !== -1) {

        label.innerText = 'Success, Valid Code...';
        label.style.color = '#85cb33';
        input.style.borderColor = '#85cb33';
        input.value = '';
        window.location.href = "http://www.google.com/";
    }
    else {

        label.innerText = 'Invalid Code, Check Your 8 Digit Code And Try Again';

        label.style.color = '#e21205'

        input.style.borderColor = '#e21205';

        setTimeout(function () {
            label.innerText = 'Please Enter Your 8 Digit Code';
            label.style.color = '';
            input.style.borderColor = '';
        }, 9000);

        
        input.value = '';
    }

    e.preventDefault();
}