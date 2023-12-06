window.addEventListener('scroll', () => {
    document.querySelector('.headerContainer').classList.toggle('levizNdrroNgjyren', window.scrollY > 0);
});
