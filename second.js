var sec = document.getElementsByClassName('sec');
for( var i = 0; i < sec.length; i++ ){
    var element = sec[i]
    element.style.border = '2px solid red'
    element.style.borderRadius = '10px'
    element.style.margin = '30px'
    element.style.padding = '40px'
}

var article = document.getElementsByClassName('article');
for( var i = 0; i < article.length; i++){
    var element = article[i];
    element.innerHTML = 'News- ' +(i+1);
    element.style.textTransform = 'uppercase';
    element.style.borderBottom = '2px solid green'
}
var author = document.getElementsByClassName('author');
for(var i = 0; i < author.length; i++){
    var element = author[i];
    element.innerHTML = 'profile- '+(i+1)
    element.style.textTransform = 'Capitalize';
}