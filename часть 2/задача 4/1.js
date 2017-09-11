


var p=document.getElementById('p1');

document.getElementById('start').onclick = f2;

function f2 () {

    var a = document.getElementById('d1').value;
    var b = document.getElementById('d2').value;
    var c=1;
for (var i=0; i<b; i=i+1) {

    c= c * a;
}
p.innerHTML+= c +"<br>";

}