const navMenu = document.querySelector('.navigation__list');

function closeBtn(e) {
  if (e.target.parentElement.classList.contains('navigation__item')) {
    {
      document.getElementById("nav-toggle").checked = false;
    }
  }
  // console.log(e.target);
  // console.log(e.target);// Ova e samo da vidime so naznacuvame
}
navMenu.addEventListener('click', closeBtn);