//  surligne 
let menu = document.querySelectorAll(' ul li a');

for (let i = 0; i < menu.length; i++) {

    let li = menu[i];

    li.addEventListener('mouseenter', function() {
        li.style.textDecoration = 'line-through';
    });
    li.addEventListener('mouseleave', function() {
        li.style.textDecoration = 'none';

    });
};