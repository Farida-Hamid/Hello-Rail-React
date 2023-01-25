import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { recieveGreetings } from '../redux/greetings';

const Greeting = () => {
  const message = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(recieveGreetings());
  }, []);

  return (
    <div>
      <h2>{message.messages}</h2>
    </div>
  )
};

export default Greeting;