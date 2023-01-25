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

export const recieveGreetings = () => (dispatch) => {
  axios.get(API).then((response) => {
    console.log('response', response.data);
    dispatch(read(response.data));
  });
};

export default greetingsReducer;