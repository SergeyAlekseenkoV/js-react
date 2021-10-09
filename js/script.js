window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');
    // hide all unnecessery tabs
    function hideTabContent() {
        tabsContent.forEach(tab => {
            tab.classList.add('hide');
            tab.classList.remove('show','fade');
        });

        //while we hide - remove active class from it
        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active');
        });
    }
    // show the tabs
    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
    
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;
        
        if(target && target.classList.contains('tabheader__item')) {
            tabs.forEach((tab, i) => {
                if(target == tab) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    // === timer === //

    const deadline = "2021-10-10";

    function getTimeRemaning(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000*60*60*24)),
              hours = Math.floor((t / (1000*60*60)%24)),
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    } 

    function getZero(num) {
        if(num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);
        updateClock();

        // function to update each second
        function updateClock() {
            const t = getTimeRemaning(endtime);

            // output amount
            
            // days.innerHTML = t.days;
            days.innerHTML = getZero(t.days);
            // hours.innerHTML = t.hours;
            hours.innerHTML = getZero(t.hours);
            // minutes.innerHTML = t.minutes;
            minutes.innerHTML = getZero(t.minutes);
            // seconds.innerHTML = t.seconds;
            seconds.innerHTML = getZero(t.seconds);


            if(t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    } 
    setClock('.timer', deadline); 
    
    // === modal +++ //

    const modalTrigger = document.querySelectorAll('[data-modal="openModal"]'),
          modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelector('[data-modal="closeModal"]');

    modalTrigger.forEach(trigger =>  {
            trigger.addEventListener('click', () => {
            // modal.classList.add('show');
            // modal.classList.remove('hide');
            modal.classList.toggle('show');
            document.body.style.overflow = "hidden";
        });
    });
    function closeModal() {
        // modal.classList.add('hide');
        // modal.classList.remove('show');
        modal.classList.toggle('show');
        document.body.style.overflow = "";
    }

    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if(e.target === modal) {
           closeModal();
        }
    });

    // adding the close by esc key

    document.addEventListener('keydown', (e) => {
        if(e.code === "Escape"){
            closeModal();
        }
    });
});

