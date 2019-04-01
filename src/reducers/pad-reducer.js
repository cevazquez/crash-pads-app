import { FETCH_PADS, FETCH_PAD_BY_ID } from "../actions/types";

const INITIAL_STATE = {
  pads: {
    data: []
  },
  pad: {
    data: {}
  }
};

export const padReducer = (state = INITIAL_STATE.pads, action) => {
  switch (action.type) {
    case FETCH_PADS:
      return { ...state, data: action.pads };
    default:
      return state;
  }
};

export const selectedPadReducer = (state = INITIAL_STATE.pad, action) => {
  switch (action.type) {
    case FETCH_PAD_BY_ID:
      return { ...state, data: action.pad };
    default:
      return state;
  }
};
