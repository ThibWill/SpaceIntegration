window.onload = () => {
    const MOBILE_TRESHHOLD = 481;
    
    const burger = document.querySelector("#burger");
    const close = document.querySelector("#close");
    const navBar = document.querySelector("#navBar");

    function displayMenu() {
        burger.style['display'] = 'none';
        navBar.style['display'] = 'flex';
    }

    function removeMenu() {
        burger.style['display'] = 'block';
        navBar.style['display'] = 'none';
    }

    burger.addEventListener('click', () => {
        displayMenu();
    });

    close.addEventListener('click', () => {
        removeMenu();
    });

    (function(){
        let previousState = window.innerWidth;
        window.addEventListener('resize', () => {
            if (window.innerWidth > MOBILE_TRESHHOLD) {
                displayMenu();
            } else if (previousState && previousState > MOBILE_TRESHHOLD) {
                removeMenu();
            }
            previousState = window.innerWidth;
        });
    }());
}