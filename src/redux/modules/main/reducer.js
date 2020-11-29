import * as c from "./constants";

const defaultState = {
  count: 0,
};

const ACTION_HANDLERS = {
  [c.CLICK]: (state) => {
    return {
      ...state,
      count: state.count + 1
    };
  },
};

export default (state = defaultState, action = {}) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
