//reducer which a basically a function
//takes an state and action as arguments
//and returns state

import initialState from "../initialState.json";

function allMyActions(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_COLOR":
      return Object.assign({}, state, {color: action.newColor});
    case "CHANGE_TEXT":
      return Object.assign({}, state, {text: action.newText});
    case "CHANGE_SHOE":
      return Object.assign({}, state, {shoebrand: action.newShoe});
    case "RESET_ALL":
      return Object.assign({}, state, {
        color: action.newColor,
        text: action.newText,
        shoebrand: action.newShoe
      });
    case "SET_SELECTED_BUTTON":
      return Object.assign({}, state, {buttonColors: action.newButtonColors});
    case "SET_CURRENT_SLIDE":
      return Object.assign({}, state, {currentSlide: action.nextSlide});
    default:
      return state;
  }
}

export default allMyActions;
