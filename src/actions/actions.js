export const changeColor = (newColor) => {
  return ({type: "CHANGE_COLOR", newColor: newColor});
};

export const changeShoe = (newShoe) => {
  return ({type: "CHANGE_SHOE", newShoe: newShoe});
};

export const resetAll = (newColor, newShoe, newText) => {
  return ({type: "RESET_ALL", newColor: newColor, newShoe: newShoe, newText: newText});
};

export const setSelectedButton = (btn1, btn2, btn3, btn4) => {
  return ({
    type: "SET_SELECTED_BUTTON",
    newButtonColors: {
      btn1: btn1,
      btn2: btn2,
      btn3: btn3,
      btn4: btn4
    }
  });
};

export const setCurrentSlide = (imgPath) => {
  return ({type: "SET_CURRENT_SLIDE", nextSlide: imgPath});
};
