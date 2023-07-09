const menuLinks = document.querySelectorAll('.menu__link');

Array.from(menuLinks).forEach(link => {
    link.onclick = () => {
        const submenu = link.closest('.menu__item').querySelector('.menu_sub');

        if (submenu) {
            submenu.classList.toggle('menu_active');
            return false;
        }
    }
});