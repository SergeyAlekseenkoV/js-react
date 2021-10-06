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
    // using event delegation on click for right menu
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
});