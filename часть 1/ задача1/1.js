


// Задача 5

// document.getElementById('start').onclick = f2;

// function f2 () {
//
//     var a = document.getElementById('d1').value;
//     var b = 2017 - a;
//     if(b==29 && b==15){
//         alert ("Welcome");
//     }
//     else {
//         alert ("Wrong walue");
//     }
// }



document.getElementById('start').onclick = f2;

function f2 () {

    var a = document.getElementById('d1').value;
    var b = 2017 - a;
    if( b == 29 ){
        alert (" you are 29 y.o. ");
    }
    else if (b == 15){
        alert ( " you are 15 y.o. ");
    }
    else {
        alert ("wrong value");
    }
}



