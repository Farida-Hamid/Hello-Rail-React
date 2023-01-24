import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './Greeting';
import store from '../redux/configureStore';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Greeting />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;