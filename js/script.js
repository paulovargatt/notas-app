'use strict';
import template from "./template.js"


let AllCardItens = JSON.parse(localStorage.getItem('itens')) || [];
const btnCompleted = document.querySelector('.btn-completed');
const mainRow = document.querySelector('.main-row');


document.addEventListener("DOMContentLoaded", function () {
    insertItensLocalStorage();
    activeMasonry();
    listenEvents();
});


function activeMasonry() {
    let msnry = new Masonry('.grid', {
        itemSelector: '.grid-item',
        columnWidth: 10,
        gutter: 10,
        percentPosition: true,
        transitionDuration: '0.8s',
        horizontalOrder: true
    });
}


function listenEvents() {
    btnCompleted.addEventListener('click', () => {
        const getItemData = btnCompleted.parentNode;
        let title = getItemData.querySelector('#titleInput');
        let desc = getItemData.querySelector('#textAreaInput');
        const itemData = {
            title: title.value,
            textArea: desc.value,
            date: moment().format()
        };

        // A Promisse verifica se algo foi atendido para então continuar ou não, poderia ser feito de varias formas...
        validateForm(itemData).then(() => {
            mainRow.insertAdjacentHTML('beforeend', template(itemData));
            AllCardItens.push(itemData);
            showToast(title.value + ' foi adicionado com sucusso');
            title.value = '';
            desc.value = '';
            localStorage.setItem('itens', JSON.stringify(AllCardItens));
            activeMasonry();
        }).catch((countErrors) => {
            showToast(`Faltou ${countErrors} ${countErrors === 1 ? 'campo!' : 'campos!'}  Não é possivel inserir`, 'warning-toast')
        });
    });


    document.addEventListener('click', (e) => {

        if (!e.target.classList.contains('tpl-btn-close')) return;
        e.preventDefault();


        let item = e.target.parentNode.dataset.item;
        removeItemFromArray(item);
        e.target.parentNode.parentNode.remove();
        activeMasonry();

    },)


}

function insertItensLocalStorage() {
    if (AllCardItens.length > 0) {
        AllCardItens.map((itemData, index) => {
            mainRow.insertAdjacentHTML('beforeend', template(itemData, index))
        });
    }
}

function removeItemFromArray(itemDelete) {
  console.log('executed', itemDelete)
    let arr = JSON.parse(localStorage.getItem('itens'));
    arr = arr.filter(function(value, i) {
        return i != itemDelete
    });
    localStorage.setItem('itens', JSON.stringify(arr));

}

function validateForm(itens) {
    return new Promise((resolve, reject) => {
        let error = 0;
        Object.values(itens).map((res) => {
            if (res === '' || res == undefined) {
                error++
            }
        });
        error > 0 ? reject(error) : resolve();
    })
}

function showToast(title, type) {
    Toastify({
        text: title,
        duration: 3000,
        close: true,
        className: type ? type : 'default',
        stopOnFocus: true, // Prevents dismissing of toast on hover
    }).showToast();
}
