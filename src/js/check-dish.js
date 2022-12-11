// CHECK DISH
(() => {
  const refs = {
    dishChoise: document.querySelector('[data-dish-is-checked]'),
    dishChoise1: document.querySelector('[data-dish-is-checked1]'),
    dishChoise2: document.querySelector('[data-dish-is-checked2]'),
    dishChoise3: document.querySelector('[data-dish-is-checked3]'),
    dishChoise4: document.querySelector('[data-dish-is-checked4]'),
    dishChoise5: document.querySelector('[data-dish-is-checked5]'),
    dishChoise6: document.querySelector('[data-dish-is-checked6]'),
    dishChoise7: document.querySelector('[data-dish-is-checked7]'),
    dishChoise8: document.querySelector('[data-dish-is-checked8]'),

    quantity: document.querySelector('[data-quantity]'),
    quantity1: document.querySelector('[data-quantity1]'),
    quantity2: document.querySelector('[data-quantity2]'),
    quantity3: document.querySelector('[data-quantity3]'),
    quantity4: document.querySelector('[data-quantity4]'),
    quantity5: document.querySelector('[data-quantity5]'),
    quantity6: document.querySelector('[data-quantity6]'),
    quantity7: document.querySelector('[data-quantity7]'),
    quantity8: document.querySelector('[data-quantity8]'),

    checkedDish: document.querySelector('[data-checked-dish]'),
    checkedDish1: document.querySelector('[data-checked-dish1]'),
    checkedDish2: document.querySelector('[data-checked-dish2]'),
    checkedDish3: document.querySelector('[data-checked-dish3]'),
    checkedDish4: document.querySelector('[data-checked-dish4]'),
    checkedDish5: document.querySelector('[data-checked-dish5]'),
    checkedDish6: document.querySelector('[data-checked-dish6]'),
    checkedDish7: document.querySelector('[data-checked-dish7]'),
    checkedDish8: document.querySelector('[data-checked-dish8]'),

    disabledButton: document.querySelector('[data-modal2-open]'),
  };

  refs.dishChoise.addEventListener('click', toggleModal);
  refs.dishChoise1.addEventListener('click', toggleModal1);
  refs.dishChoise2.addEventListener('click', toggleModal2);
  refs.dishChoise3.addEventListener('click', toggleModal3);
  refs.dishChoise4.addEventListener('click', toggleModal4);
  refs.dishChoise5.addEventListener('click', toggleModal5);
  refs.dishChoise6.addEventListener('click', toggleModal6);
  refs.dishChoise7.addEventListener('click', toggleModal7);
  refs.dishChoise8.addEventListener('click', toggleModal8);

  function toggleModal() {
    refs.disabledButton.removeAttribute('disabled');
    refs.quantity.classList.toggle('available');
    refs.checkedDish.classList.toggle('checked');
  }
  function toggleModal1() {
    refs.disabledButton.removeAttribute('disabled');
    refs.quantity1.classList.toggle('available');
    refs.checkedDish1.classList.toggle('checked');
  }
  function toggleModal2() {
    refs.disabledButton.removeAttribute('disabled');
    refs.quantity2.classList.toggle('available');
    refs.checkedDish2.classList.toggle('checked');
  }
  function toggleModal3() {
    refs.disabledButton.removeAttribute('disabled');
    refs.quantity3.classList.toggle('available');
    refs.checkedDish3.classList.toggle('checked');
  }
  function toggleModal4() {
    refs.disabledButton.removeAttribute('disabled');
    refs.quantity4.classList.toggle('available');
    refs.checkedDish4.classList.toggle('checked');
  }
  function toggleModal5() {
    refs.disabledButton.removeAttribute('disabled');
    refs.quantity5.classList.toggle('available');
    refs.checkedDish5.classList.toggle('checked');
  }
  function toggleModal6() {
    refs.disabledButton.removeAttribute('disabled');
    refs.quantity6.classList.toggle('available');
    refs.checkedDish6.classList.toggle('checked');
  }
  function toggleModal7() {
    refs.disabledButton.removeAttribute('disabled');
    refs.quantity7.classList.toggle('available');
    refs.checkedDish7.classList.toggle('checked');
  }
  function toggleModal8() {
    refs.disabledButton.removeAttribute('disabled');
    refs.quantity8.classList.toggle('available');
    refs.checkedDish8.classList.toggle('checked');
  }
})();
