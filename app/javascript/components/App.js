import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Greeting from './Greeting';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
          {/* <h1>Hello World from App!</h1> */}
          {/* <Greeting /> */}
            <Route exact path='/' element={<Greeting />} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;