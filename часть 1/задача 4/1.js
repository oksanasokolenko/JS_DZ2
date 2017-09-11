





document.getElementById('start').onclick = f2;

function f2 () {

    var pass = document.getElementById('pass').value;
    var name = document.getElementById('name').value;

    if (pass=="333" && name=="ivan") {
        alert("Welcome ivan");
    }
    else if (pass=="666" && name=="ssss"){
        alert("Welcome alex");
    }
    else if (pass=="0000" && name=="gibs"){
        alert("Welcome petr");

    }
    else {
        alert("Ошибка входа")
    }
};






