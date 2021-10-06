// =========== managing the time of scripts executing ========== //
// setTimeout() and setInterval
const btn = document.querySelector('.btn');
// const timerId = setTimeout(function(text) {
//     console.log(text);
// }, 2000, "Hi there man!");

let timerN,
    i = 0;


function myAnime() {
    const element = document.querySelector('.box');
    let position = 0;

    // ===> start interval
    const id = setInterval(frame, 20);
    
    // each movement
    function frame() {
        if(position == 300) {
            clearInterval(id);
        } else if(position == 150) {
            position++;
            element.style.bottom = position*0 +'px';
            element.style.right = position*0 +'px';
        } else { // if our animation haven't stopped
            position++;
            element.style.top = position + 'px';
            element.style.left = position + 'px';
        }
    }
}// we need to start interval up above the frame function ===>

// assign the trigger of the animation
btn.addEventListener('click', myAnime);

// stop executing the timer
/* clearInterval(timerId);

const Timer = setTimeout(logger, 1000);

function logger() {
    if (i === 3) {
        clearInterval(timerN);
    } else {
        clearInterval();
    }

    console.log('TEXT');
    i++;
}

btn.addEventListener('click', () => {
    timerN = setInterval(logger, 500);
});

let id = setTimeout(function log(){
    console.log('hey man!');
    id = setTimeout(log, 500);
}, 500); */