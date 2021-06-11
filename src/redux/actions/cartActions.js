import { TOGGLE_CARD_HIDDEN, ADD_ITEM } from '../actionTypes';

export const toggleCardHidden = () => {
  return {
    type: TOGGLE_CARD_HIDDEN,
  };
};

export const addItem = item => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};
