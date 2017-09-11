






document.getElementById('start').onclick = f2;

function f2 () {

    var a = document.getElementById('d1').value;
    var b = document.getElementById('d2').value;

    if (a > b) {
        alert("Максимальное число:  " + a);

    }
    else if (b > a) {
        alert("Максимальное число:  " + b);
    }

    else if (b == a) {
        alert("Числа равны");
    }
};
