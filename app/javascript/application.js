// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (<h1>Hello World!</h1>);
}

ReactDOM.render(
  <App/>,
  document.getElementById('greetings'),
);