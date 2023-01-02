import "./validation-form.scss";
import luhnAlgorithm from "../luhn-algorithm/luhn-algorithm";
import CardList, { cardsListItemDisable } from "../cards-list/cards-list";

export default class ValidationForm {
  // constructor(element) {
  //   this._element = element;
  // }

  //проверка валидации карты
  checkValid() {
    const formControlValue = document.querySelector(
      ".validation-form__input"
    ).value;
    const checkValidResult = luhnAlgorithm(formControlValue);
    //console.log(checkValidResult);

    const infoNoValid = document.querySelector(".validation-form__no-valid");
    const infoValid = document.querySelector(".validation-form__valid");

    if (!checkValidResult) {
      infoValid.classList.remove("active");
      infoNoValid.classList.add("active");
    } else if (checkValidResult) {
      infoNoValid.classList.remove("active");
      infoValid.classList.add("active");
    }
  }

  //проверка типа карты
  checkType() {
    const cardList = new CardList(document.querySelector(".cards-list"));

    const formControlValue = document.querySelector(
      ".validation-form__input"
    ).value;

    const infoNoType = document.querySelector(".validation-form__no-type");

    if (formControlValue.startsWith("2")) {
      const cardTypeMir = document.querySelector(".cards-list__item_mir");
      cardList.showCardImg(cardTypeMir);
    } else if (formControlValue.startsWith("4")) {
      const cardTypeVisa = document.querySelector(".cards-list__item_visa");
      cardList.showCardImg(cardTypeVisa);
    } else if (
      formControlValue.startsWith("51") ||
      formControlValue.startsWith("52") ||
      formControlValue.startsWith("53") ||
      formControlValue.startsWith("54") ||
      formControlValue.startsWith("55")
    ) {
      const cardTypeMastercard = document.querySelector(
        ".cards-list__item_mastercard"
      );
      cardList.showCardImg(cardTypeMastercard);
    } else if (
      formControlValue.startsWith("34") ||
      formControlValue.startsWith("37")
    ) {
      const cardTypeAmex = document.querySelector(".cards-list__item_amex");
      cardList.showCardImg(cardTypeAmex);
    } else if (formControlValue.startsWith("60")) {
      const cardTypeDiscover = document.querySelector(
        ".cards-list__item_discover"
      );
      cardList.showCardImg(cardTypeDiscover);
    } else if (
      formControlValue.startsWith("31") ||
      formControlValue.startsWith("35")
    ) {
      const cardTypeJCB = document.querySelector(".cards-list__item_jcb");
      cardList.showCardImg(cardTypeJCB);
    } else if (
      formControlValue.startsWith("30") ||
      formControlValue.startsWith("36") ||
      formControlValue.startsWith("38")
    ) {
      const cardTypeDinersClub = document.querySelector(
        ".cards-list__item_diners-club"
      );
      cardList.showCardImg(cardTypeDinersClub);
    } else {
      cardsListItemDisable();

      infoNoType.classList.add("active");
    }
  }
}
