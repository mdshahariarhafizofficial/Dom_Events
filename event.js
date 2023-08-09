document.getElementById('text-color-changer').onclick = function () {
    document.body.style.color = '#EA1179'
}

function red() {
    document.body.style.backgroundColor = 'red';
}
function blue() {
    document.body.style.backgroundColor = 'blue';
}
// Way - 1
var btn_1 = document.getElementById('btn-1').addEventListener("click", function () {
    document.body.style.backgroundColor = "green"
})

// Way - 2
var btn_2 = document.getElementById('btn-2');
btn_2.addEventListener("click", red)

// Way - 3
var btn_3 = document.getElementById('btn-3');
btn_3.onclick = blue;

document.getElementById('btn-4').addEventListener("click", function () {
    document.body.style.backgroundColor = 'pink'
})

