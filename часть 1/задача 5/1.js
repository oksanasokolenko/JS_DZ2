// Задача 1. Пользователь вводит два числа. Найдите и выведите максимальное из двух чисел.

document.getElementById('start').onclick = f2;

function f2() {

    var a = document.getElementById('d1').value;
    var b = document.getElementById('d2').value;
    var c = document.getElementById('d3').value;

    if (a > b && a > c) {
        alert(a);

    }
    else if (b > a && b>c) {
        alert(b);
    }
    else if (c > a && c>b) {
        alert(c);
    }
    else {
        alert("egual");
    }
}
