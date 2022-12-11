// MODAL-2
(() => {
  const refs = {
    radioBtn1: document.querySelector('[data-payment1]'),
    radioBtn2: document.querySelector('[data-payment2]'),
    disabledButton: document.querySelector('[data-disabled-button]'),
    openModal2Btn: document.querySelector('[data-modal2-open]'),
    closeModal2Btn: document.querySelector('[data-modal-close2]'),
    modal: document.querySelector('[data-modal]'),
    modal2: document.querySelector('[data-modal2]'),
    modal3: document.querySelector('[data-modal-appear]'),
  };

  refs.closeModal2Btn.addEventListener('click', toggleModal);
  refs.openModal2Btn.addEventListener('click', toggleModal2);
  refs.openModal2Btn.addEventListener('click', toggleModal3);
  refs.radioBtn1.addEventListener('click', toggleModal4);
  refs.radioBtn2.addEventListener('click', toggleModal4);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
    refs.modal2.classList.toggle('is-close');
    refs.modal3.classList.toggle('is-open');
  }
  function toggleModal2() {
    refs.modal2.classList.toggle('is-close');
  }
  function toggleModal3() {
    refs.modal3.classList.toggle('is-open');
  }
  function toggleModal4() {
    refs.disabledButton.removeAttribute('disabled');
  }
})();
