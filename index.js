const menu = document.querySelector('.burger');
const navList = document.querySelector('.nav__list');
menu.addEventListener('click', (event) => {
  if (navList.style.display === 'flex') {
    navList.style.display = 'none';
    menu.style.position = 'absolute';
    menu.style.transform = 'rotate(90deg)';
  } else {
    navList.style.display = 'flex';
    menu.style.transform = 'rotate(-90deg)';
    menu.style.position = 'fixed';
  }
});
