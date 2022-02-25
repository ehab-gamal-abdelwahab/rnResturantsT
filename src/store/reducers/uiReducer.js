import {LOAD_STOP, LOAD_START} from '../actions/actionTypes';

const initstate = {
  loading: false,
};

const uiReducer = (state = initstate, action) => {
  switch (action.type) {
    case LOAD_START:
      return {
        ...state,
        loading: action.loading,
      };
    case LOAD_STOP:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
};

export default uiReducer;
