'use strict'

const btnCompleted = document.querySelector('.btn-completed');
const cartItem = document.querySelector('.card-item');

btnCompleted.addEventListener('click', () => {
  const getItemData = btnCompleted.parentNode;

  const itemData = {
  title: getItemData.querySelector('#titleInput').value,
  textArea: getItemData.querySelector('#textAreaInput').value,
}

console.log(itemData.title);
})


