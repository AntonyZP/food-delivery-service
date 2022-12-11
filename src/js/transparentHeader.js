window.onscroll = () => changeHeaderBackground();
function changeHeaderBackground() {
  const header = document.querySelector('[data-header]');
  const headerOffsetTrigger = header.offsetTop;
  const pageOffset = window.pageYOffset;
  if (pageOffset > headerOffsetTrigger) {
    header.classList.add('transparency');
  } else {
    header.classList.remove('transparency');
  }
}
