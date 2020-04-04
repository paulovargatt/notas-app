'use strict'
let AllCardItens = JSON.parse(localStorage.getItem('itens')) || [];
console.log(AllCardItens);
const btnCompleted = document.querySelector('.btn-completed');
const mainRow = document.querySelector('.main-row');

if (AllCardItens.length > 0) {
  AllCardItens.forEach(itemData => {
    mainRow.insertAdjacentHTML('beforeend', `
    <div class="card-item col-md-4 mb-2 align-self-start" style=" width: 18rem;">
    <div class="card mh-50">
      <div class="card-body py-5">
        <h5 class="card-title">${itemData.title}</h5>
        <p class="card-text">${itemData.textArea}</p>
      <div class="dropdown-divider py-2"> </div>
      </div>
    </div>
  </div>
     `)
  });
}

btnCompleted.addEventListener('click', () => {
  const getItemData = btnCompleted.parentNode;

  const itemData = {
    title: getItemData.querySelector('#titleInput').value,
    textArea: getItemData.querySelector('#textAreaInput').value,
  }

  mainRow.insertAdjacentHTML('beforeend', `
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

  AllCardItens.push(itemData);
  localStorage.setItem('itens', JSON.stringify(AllCardItens))
  console.log(AllCardItens)
  //console.log(AllCardItens);

  //console.log(mainRow);

})


