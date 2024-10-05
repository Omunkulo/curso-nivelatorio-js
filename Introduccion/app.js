let btn = document.getElementById("main_button");
let title = document.getElementById("main_titulo");
btn.addEventListener('click', function(){
    currentTitle = title.textContent;
    title.textContent = currentTitle.toUpperCase();
});

//let main:div = document.querySelector('main_div')