'use strict'

const btnCompleted = document.querySelector('.btn-completed');
const mainRow = document.querySelector('.main-row');

btnCompleted.addEventListener('click', () => {
  const getItemData = btnCompleted.parentNode;

  const itemData = {
    title: getItemData.querySelector('#titleInput').value,
    textArea: getItemData.querySelector('#textAreaInput').value,
  }
  mainRow.insertAdjacentHTML('beforeend',`
  <div class="card-item col-md-4 mb-2"" style=" width: 18rem;">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">${itemData.title}</h5>
      <p class="card-text">${itemData.textArea}</p>
    <div class="dropdown-divider py-2"> </div>
    </div>
  </div>
</div>
   `)
   console.log(mainRow);

})


