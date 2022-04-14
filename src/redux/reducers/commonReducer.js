
import { CHANGE_APP } from '../actions/types';
import { INITIAL_STATE } from '../initialState';

const commonReducer = (state = INITIAL_STATE, action) => {
  const newState = { ...state };

  switch (action.type) {

    case CHANGE_APP:
      newState.app = action.payload;
      break;

    default: break;
  }
  return newState;
};

export default commonReducer;

