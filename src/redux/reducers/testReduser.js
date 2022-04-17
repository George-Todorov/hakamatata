import { START_TEST, FINISH_TEST } from '../actions/types';
import { INITIAL_STATE } from '../initialState';

const testReducer = (state = INITIAL_STATE, action) => {
  const newState = { ...state };

  switch (action.type) {
    case START_TEST:
        newState.test.isStarted = true;
      break;

    case FINISH_TEST:
        newState.test.isFinishted = true;
    break;
      
    default: break; 
  }

  return newState;
};

export default testReducer;