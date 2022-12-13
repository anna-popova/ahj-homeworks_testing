import './cards-list.scss';

export default class CardList {
    // constructor(element) {
    //   this._element = element;
    // }

    showCardImg(value) {
        //TODO: добавить общую функцию
        const cardsListItems = document.querySelectorAll('.cards-list__item');
        for (const cardsListItem of cardsListItems) {
            cardsListItem.classList.add('disabled');
        }

        value.classList.remove('disabled');
    }
}
