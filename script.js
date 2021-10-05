"use strict";


/* ========== classList =========== */

const btns = document.querySelectorAll('button');

console.log(btns[0].classList.length);
// item() shows the class of the particular index

console.log(btns[0].classList.item(0));
// adding class

console.log(btns[1].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));

// toggle class

// console.log(btns[0].classList.toggle('red'));
// btns[0].addEventListener('click', e => {
//    e.target.classList.toggle('red');
// });
// check if class exists

if(btns[1].classList.contains('red')) {
    console.log("Red class here!");
}

btns[2].addEventListener('click', e => {
    // if(!btns[0].classList.contains('red')){
    //     btns[0].classList.add('red');
    // } else {
    //     btns[0].classList.remove('red');
    // }

    btns[0].classList.toggle('red');
});

console.log(btns[0].className);

/* ========== delegation of events =========== */

const wrapper = document.querySelector('.btn-block');

wrapper.addEventListener('click', e => {
    if(e.target && e.target.classList.contains('button.red')) {
        console.log("HO-ho!");
    }
});

const btn = document.createElement('button');
btn.classList.add('red','some');
wrapper.append(btn);

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('Ho-ho-hello!');
    });
});