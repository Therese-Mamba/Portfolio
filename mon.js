const hamburger = document.getElementById('hamburger-menu');
const nav = document.getElementById('main-nav');
hamburger.onclick = () => {
    nav.classList.toggle('active');
};