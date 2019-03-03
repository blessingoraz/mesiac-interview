import ActionTypes from '../constants/actionTypes';

import { initialState } from '../config/initialState';

const reducer = (state = initialState.students, action) => {

  switch (action.type) {
    case ActionTypes.SET_STUDENTS:
      return { ...state, students: action.students };
    default:
      return state;
  }
};
export default reducer;
