let btn = document.getElementById("main_button");
let title = document.getElementById("main_titulo");
btn.addEventListener('click', function(){
    currentTitle = title.textContent;

    if (currentTitle === currentTitle.toUpperCase()){
        main_button.textContent = currentTitle.toLowerCase();
    } else {
        main_button.textContent = currentTitle.toUpperCase();
    }
});

let sum =0;
for (let 1 = 0; i<10; i++){
    sum+=i;
}
console.log(sum);
//let main:div = document.querySelector('main_div')