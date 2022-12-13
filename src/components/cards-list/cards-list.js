import './cards-list.scss';
import cardsListItemDisable from '../cards-list-item-disable/cards-list-item-disable';

export default class CardList {
    // constructor(element) {
    //   this._element = element;
    // }

    showCardImg(value) {
      cardsListItemDisable();

      value.classList.remove('disabled');
    }
}
