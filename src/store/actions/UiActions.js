import {LOAD_START, LOAD_STOP} from './actionTypes';

export const loadStart = () => {
  return {
    type: LOAD_START,
    loading: true,
  };
};

export const loadSStop = () => {
  return {
    type: LOAD_STOP,
    loading: false,
  };
};
