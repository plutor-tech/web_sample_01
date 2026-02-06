console.log("Ready");

/*
const toggles = document.querySelectorAll('.toggle');

for (let i=0; i < toggles.length; i++) {
    const toggle = toggles[i];

    toggle.addEventListener('click', () => {
        const img = document.getElementById('menuButtonImg');
        const target = document.querySelector(toggle.dataset.target);

        // Toggle the menu open and close
        if (img.src.includes('close')) {
            img.src = 'assets/menu.svg';
            img.alt = 'Menu'
        } else {
            img.src = 'assets/close_menu.svg';
            img.alt = 'Close menu'
        }
        
        // Toggle the menu on and off
        target.classList.toggle('is-active');
    });
} 
*/

menuButton.addEventListener('click', () => {
    const menuBtnImg = document.getElementById('menuButtonImg');
    const menuCloseBtnImg = document.getElementById('menuCloseButtonImg');
    const menuTargetPan = document.querySelector(menuButton.dataset.target);

    /* NOTE: This strategy to change the src of the img, takes few seconds time
            on the frst load. To avoid this delay, we created two separate buttons
            with each of the the images and kept one of them 'hidden', and toggled
            the hidden state for each when clicked.
    if (img.src.includes('close')) {
        img.src = 'assets/menu.svg';
        img.alt = 'Menu'
    } else {
        img.src = 'assets/close_menu.svg';
        img.alt = 'Close menu'
    }
    */
    
    // Toggle the menu on and off
    menuBtnImg.classList.toggle('is-hidden');
    menuCloseBtnImg.classList.toggle('is-hidden');
    menuTargetPan.classList.toggle('is-active');
});
