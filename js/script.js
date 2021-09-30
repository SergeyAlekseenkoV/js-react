"use strict";

// ======= events ======= //

const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('Click!');
// };

// btns[0].addEventListener('click', function(e) {
//     console.log("Text ho!");
// });

// btns[1].addEventListener('mouseover',(e) => {
//     console.log("Ho-ho!");
// });
// let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    console.log(e.type);
    // i++;
    // if(i == 1) {
    //     btns[2].removeEventListener('click', deleteElement);
    // }
};

// btns[2].addEventListener('mouseup',(e) => {
//     console.log("Ho-ho-ho!");
//     console.log(e.target);
// });

// btns[2].addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);
// btns[2].removeEventListener('click',deleteElement);

// === adding event to all the buttons === //

btns.forEach(btn => {
    btn.addEventListener('click',deleteElement,{once: true});
});

const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault();

    console.log(event.target);
});
