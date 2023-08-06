var ul = document.getElementById('parent')
var li = document.createElement('li')
li.innerHTML = 'added item'
ul.appendChild(li)


var container = document.getElementById('container')
var p = document.createElement('p')
p.innerHTML = 'This is added paragraph. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
container.appendChild(p)
p.style.border = '2px solid red'