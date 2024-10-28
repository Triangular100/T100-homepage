let timeOut;

function closeMenu() {
  const navMenu = document.querySelector('nav.menu');

  clearTimeout(timeOut);
  timeOut = setTimeout(() => {
    navMenu.style.display = 'none';
  }, 300);

  navMenu.classList.remove('active');
  navMenu.classList.add('inactive');
}

function openMenu() {
  clearTimeout(timeOut);
  const navMenu = document.querySelector('nav.menu');
  navMenu.style.display = 'flex';
  navMenu.classList.remove('inactive');
  navMenu.classList.add('active');
}

function bindCloseMenuEvent() {
  const menuItems = document.querySelectorAll('.menu .item');
  for (let i = 0; i < menuItems.length; i += 1) {
    menuItems[i].addEventListener('click', closeMenu);
  }
}

function bindHeaderEvent() {
  const menuButton = document.querySelector('.header-icon');
  const navMenu = document.querySelector('nav.menu');

  menuButton.addEventListener('click', () => {
    if (navMenu.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });
}

export default function loadNav() {
  bindCloseMenuEvent();
  bindHeaderEvent();
}
