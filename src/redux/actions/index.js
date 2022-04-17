
import { CHANGE_APP, START_TEST, FINISH_TEST } from './types';

export const changeApp = name => {
  return { type: CHANGE_APP, payload: name };
};

export const startTest = () => {
  return { type: START_TEST };
};

export const finishTest = () => {
  return { type: FINISH_TEST };
};

