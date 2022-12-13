export default function cardsListItemDisable() {
   const cardsListItems = document.querySelectorAll('.cards-list__item');

   for (const cardsListItem of cardsListItems) {
       cardsListItem.classList.add('disabled');
   }
}
