// ANIMATION
(() => {
  const refs = {
    logo: document.querySelector('[data-logo]'),
    discount: document.querySelector('[data-discount]'),
  };

  let disc = ['-5%', '-10%', '-15%', '-20%', '-25%'];
  let rand = Math.floor(Math.random() * disc.length);
  disc = disc[rand];

  refs.logo.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.logo.classList.toggle('animated');
    refs.discount.classList.toggle('animated');
    document.getElementById('disc').innerHTML = disc;
  }
})();
