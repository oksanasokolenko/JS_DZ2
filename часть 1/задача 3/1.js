





document.getElementById('start').onclick = f2;

function f2 () {

    var a = document.getElementById('d1').value;

    if (a>=1 && a<=20){
        alert ("Вы попали в первый подьезд");
    }
    else if (a>=21 && a<=64){
        alert("Вы попали во второй подьезд");
    }
    else if (a>=65 && a<=80){
        alert( "Вы попали в третий подьезд");
    }
    else {
        alert ( "block not found");
    }

};

