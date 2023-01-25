import axios from 'axios';

const READ = 'READ';
const read = (message) => ({ type: READ, payload: message});

const API = 'api/greetings';

const greetingsReducer = (state = [], action) => {
  switch (action.type) {
    case READ:
      return action.payload;
    default:
      return state;
  }
};

export const recieveGreetings = () => async(dispatch) => {
  axios.get(API).then((response) => {
    dispatch(read(response.data));
  });
};

export default greetingsReducer;