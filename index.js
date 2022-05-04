// animation des bouttons
let button = document.getElementsByClassName("btn");


for (let i = 0; i < button.length; i++) {

    let btn = button[i];

    btn.addEventListener('mouseenter', function() {

        let fond = window.getComputedStyle(btn).getPropertyValue('background-color');
        if (fond == 'rgb(255, 255, 255)') {
            btn.style.backgroundColor = 'inherit';
            btn.style.color = 'white';
            btn.style.border = ' 3px solid white'
        } else {
            btn.style.backgroundColor = 'white';
            btn.style.color = ' #b11313';
            btn.style.border = ' 3px solid white';

        };

    });
    btn.addEventListener('mouseleave', function() {

        let fond = window.getComputedStyle(btn).getPropertyValue('background-color');
        if (fond == 'rgb(255, 255, 255)') {
            btn.style.backgroundColor = 'inherit';
            btn.style.color = 'white';
            btn.style.border = ' 3px solid white'
        } else {
            btn.style.backgroundColor = 'white';
            btn.style.color = ' #b11313';
            btn.style.border = ' 3px solid white';

        };

    });
};
// surbrillance
let boutton = document.getElementsByClassName("btn");
for (let j = 0; j < menu.length; j++) {

    let btn = button[j];

    li.addEventListener('mouseover', function() {
        btn.style.boxShadow = '10px 10px 100px solid white';
    });
    li.addEventListener('mouseout', function() {
        btn.style.boxShadow = 'none';

    });
};

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




// fade in 

let ratio = .1;

let options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio,
};

function handelIntersect(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        };
    });
};
let observer = new IntersectionObserver(handelIntersect, options);
observer.observe(document.querySelector('.fade'));