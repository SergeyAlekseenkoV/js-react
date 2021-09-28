'use strict';

// ==== getting elements throught the different methods ==== //

// const box = document.getElementById("box");
// console.log(box);

// const btns = document.getElementsByTagName('button');
// console.log(btns[1]); // get chosen second button

// const circles = document.getElementsByClassName('circle');
// console.log(circles[2]);

// const hearts = document.querySelectorAll('.heart');

// hearts.forEach(item => {
//     console.log(item);
// });

// // returns first element
// const oneHeart = document.querySelector('.heart');
// console.log(oneHeart);

// const div = document.querySelector('div');
// console.log(div); // div #box



// ==== actions with elements on the page ==== //

// ==== changing style ==== //

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');
      //oneHeart = wrapper.querySelector('.heart');

btns[1].style.borderRadius = "5em";
btns[1].style.borderInline = "1px";
btns[1].style.borderInlineColor = "red";
btns[1].style.borderInlineStyle = "solid";

circles[1].style.backgroundColor = "yellow";

box.style.cssText = "background-color: lightblue;color: darkblue;width: 50vw;";

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = "lightgreen";
// }

hearts.forEach(item => {
    item.style.backgroundColor = "darkgreen";
});

// ==== creating elements dynamically ==== //

const div = document.createElement('div');
// div.style.cssText = "height: 50px; width: 40vh;background-color: blue;";
// var text = document.createTextNode('i was here...');

div.classList.add('black');
// document.body.append(div);
// document.body.appendChild(div);
// ==== place element into the end ==== //
wrapper.append(div);
// ==== place element to the start ==== //
wrapper.prepend(div);

// === adding element before === //
hearts[0].before(div);
// === old method === //
// wrapper.insertBefore(div, hearts[0]);

// === adding element after === //
hearts[0].after(div);
// === removing of the element .circle === //
circles[1].remove();
// === old method === //
// wrapper.removeChild(hearts[1]);

// === replace element === //
hearts[0].replaceWith(circles[0]);
// === old method === //
// wrapper.replaceChild(circles[0], hearts[0]);

// === adding content dynamically === //

div.innerHTML = '<h4>"Hi there!"</h4>';// whole structure

// div.textContent = "Hello!"; // just content

// insert code before or after

div.insertAdjacentHTML('beforebegin', '<h4>Ho-ho!</h4>');

div.insertAdjacentHTML('afterbegin', '<h4>Ho-ho!</h4>');
div.insertAdjacentHTML('beforeend', '<h4>Ho-ho!</h4>');
div.insertAdjacentHTML('afterend', '<h4>Ho-ho!</h4>');















