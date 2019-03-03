import axios from 'axios';
import ActionTypes from '../constants/actionTypes';
import RESPONSE_MESSAGES from '../constants/responseMessages';
import utils from '../lib/utils';

const URL = 'http://localhost:3000';

export function getStudents() {
  return (dispatch) => {
    return axios.get(`${URL}`)
      .then((students) => {
        console.log('response', students);

        // Dispatch actions
        dispatch(setStudents(utils.mapStudentData(students)));        

        return RESPONSE_MESSAGES.SUCCESS;
      }).catch(() => {
        dispatch(setErrorMessage(RESPONSE_MESSAGES.FAILED_REQUEST));
        return Promise.reject({
          message: RESPONSE_MESSAGES.FAILED_REQUEST,
          response: {
            status: 400
          }
        });
      });
  };
}

// Set students
export function setStudents(students) {
  return {
    type: ActionTypes.SET_STUDENTS,
    students
  };
}

// Set error messages
export function setErrorMessage(errorMessage) {
  return {
    type: ActionTypes.SET_ERROR_MESSAGE,
    errorMessage
  };
}