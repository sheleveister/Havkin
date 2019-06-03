'use strict';
//duel@whaffkine.com

const modal = document.querySelector('.modal-wrapper');
const btnClose = document.querySelector('.modal__icon-close');
const wrapperClose = document.querySelector('.modal-wrapper');
const getToKnowBtn = document.querySelector('.get-to-know__button');
const modalBackground = document.querySelector('.modal--background');
const sendBtn = document.querySelector('.modal__button');


const openModal = () => {
  modal.classList.add('modal-open');
  document.body.classList.add('modal-open');
};

const closeModal = () => {
  modal.classList.remove('modal-open');
  document.body.classList.remove('modal-open');
};

getToKnowBtn.addEventListener('click', openModal);

btnClose.addEventListener('click', closeModal);
wrapperClose.addEventListener('click', closeModal);

modalBackground.addEventListener('click', e => e.stopPropagation());


sendBtn.addEventListener('click', e => {
  e.preventDefault();

  const xhr = new XMLHttpRequest();

  const form = document.forms.feedback_form;
  const formName = form.elements.name.value;
  const formEmail = form.elements.email.value;

  const params = `name=${encodeURIComponent(formName)}&email=${encodeURIComponent(formEmail)}`;
  // xhr.open('GET', '/api/mail?' + params, true);
  // xhr.send();

  // console.log('formName', formName);
  // console.log('formEmail', formEmail);
});
