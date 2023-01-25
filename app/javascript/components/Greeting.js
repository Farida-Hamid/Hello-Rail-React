import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { recieveGreetings } from '../redux/greetings';

const Greeting = () => {
  const message = useSelector((state) => state.greeting);
  const dispatch = useDispatch();
  console.log("state at greeting component", message);

  useEffect(() => {
      dispatch(recieveGreetings());
  }, []);

  return (
    <div>
      <h2>👋{message}</h2>
    </div>
  )
};

export default Greeting;