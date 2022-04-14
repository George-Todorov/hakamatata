import { ALERT } from '../actions/types';
import { INITIAL_STATE } from '../initialState';

const loggerReducer = (state = INITIAL_STATE, action) => {
  const newState = { ...state };

  switch (action.type) {
    case ALERT:
      newState.toastr = action.payload;
      break;
      
    default: break; 
  }

  return newState;
};

export default loggerReducer;

