
import { CHANGE_APP } from './types';

export const changeApp = name => {
  return { type: CHANGE_APP, payload: name };
};
