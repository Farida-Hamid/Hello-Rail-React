import axios from 'axios';

const GET_DATA = 'GET_DATA';
const API = 'http://127.0.0.1:3000/api/greetings';


const initialState = [];

const greetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    default:
      return state;
  }
};

export const recieveGreetings = () => (dispatch) => {
  axios.get(API).then((resonse) => {
    const {data} = resonse.data;
    console.log('response', resonse.data);
    dispatch({ type: GET_DATA, payload: data })
  });
};

export default greetingsReducer;