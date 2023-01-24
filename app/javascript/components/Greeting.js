import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { recieveGreetings } from '../redux/greetings';

const Greeting = () => {
  const state = useSelector((state) => state.greeting);
  console.log("state.greeting",state);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(recieveGreetings());
  }, []);

  return (
      <div className="container">
          <div>
              <h2>👋{state}</h2>
          </div>
      </div>
  )
};

export default Greeting;