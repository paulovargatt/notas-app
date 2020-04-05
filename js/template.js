function template(itemData, index) {
    return `
    <div class="card-item align-self-start grid-item" >
    <div class="card mh-50" data-item="${index}">
        
      <i class="fas fa-times-circle tpl-btn-close"></i>
      
      <div class="card-body">
        <h5 class="card-title">${itemData.title}</h5>
        <p class="card-text">${itemData.textArea}</p>
      <div class="time-card">
        <p>${itemData.date ? moment(itemData.date).fromNow() : ''}</p>
        </div>
      </div>
    </div>
  </div>
`
}

export default template;
