'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

// const width = box.clientWidth,
// const width = box.offsetWidth, // origin value as set in css
    //   height = box.clientHeight;
    // height = box.offsetHeight; // origin value as set in css

    const width = box.scrollWidth; // doesn't include the width of the scroll 15px
    const height = box.scrollHeight; // whole height of the content
console.log(width, height);  

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect(),top);

const style = window.getComputedStyle(box);// adding here second parametr you get styles of pseudo element

console.log(style.display);

console.log(document.documentElement.scrollTop);



