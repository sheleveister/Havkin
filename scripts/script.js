'use strict';
//duel@whaffkine.com

const modal = document.querySelector('.modal-wrapper');
const btnClose = document.querySelector('.modal__icon-close');
const wrapperClose = document.querySelector('.modal-wrapper');
const getToKnowBtn = document.querySelector('.get-to-know__button');
const modalBackground = document.querySelector('.modal--background');


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
