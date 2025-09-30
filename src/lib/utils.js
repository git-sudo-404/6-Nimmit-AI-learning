export const INITIAL_CARD_STATE = {
  cardNumber: 0,
  isFlipped: true,
  isSelect: false,
  rowNumber: 5, // only 5 rows (0-4), a row of index 5 indicates the card is still in the stack
  colNumber: 0,
};

export const createCard = ({
  cardNumber = 0,
  isFlipped = true,
  isSelect = false,
  rowNumber = 5,
  colNumber = 0,
}) => {
  return {
    cardNumber,
    isFlipped,
    isSelect,
    rowNumber,
    colNumber,
  };
};
