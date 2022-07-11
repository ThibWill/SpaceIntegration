window.onload = () => {
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
            if (window.innerWidth > 481) {
                displayMenu();
            } else if (previousState && previousState > 481) {
                removeMenu();
            }
            previousState = window.innerWidth;
        });
    }());
}